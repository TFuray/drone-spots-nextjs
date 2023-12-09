'use client'
import { newCommentSchema } from '@/app/validationSchemas'
import ErrorMessage from '@/components/ui/ErrorMessage'
import Spinner from '@/components/ui/Spinner'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Callout,
  Card,
  Flex,
  Heading,
  Text,
  TextField
} from '@radix-ui/themes'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsCardImage, BsImageFill } from 'react-icons/bs'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'

interface Props {
  params: { spotTitle: string }
}

type CommentForm = z.infer<typeof newCommentSchema>

const NewComment = ({ params }: Props) => {
  const { status, data: session } = useSession()

  const router = useRouter()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CommentForm>({
    resolver: zodResolver(newCommentSchema)
  })

  return (
    <>
      <div className='flex grow-0'>
        <div>
          <form
            onSubmit={handleSubmit(async data => {
              try {
                setIsSubmitting(true)
                await axios.post('/api/comments', data)
                router.push(`/spots/${params.spotTitle}`)
              } catch (error) {
                setIsSubmitting(false)
                setError('An unexpected error occured.')
              }
            })}
          >
            <Card size='2' style={{ width: 500 }}>
              <Flex direction='column' gap='3'>
                <Heading size='6'>Add Comment</Heading>
                <TextField.Root>
                  <TextField.Slot>
                    <BsCardImage />
                  </TextField.Slot>
                  <TextField.Input
                    placeholder='Write Comment'
                    {...register('text')}
                  />
                </TextField.Root>
                {<ErrorMessage>{errors.text?.message}</ErrorMessage>}
                {/* <Controller
                  name='text'
                  control={control}
                  render={({ field }) => (
                    <SimpleMDE placeholder='text' {...field} />
                  )}
                />
                {<ErrorMessage>{errors.text?.message}</ErrorMessage>} */}
                <div className='hidden'>
                  <TextField.Root>
                    <TextField.Slot>
                      <BsCardImage />
                    </TextField.Slot>
                    <TextField.Input
                      placeholder='author'
                      defaultValue={session?.user?.email!}
                      {...register('author')}
                    />
                  </TextField.Root>

                  <TextField.Root>
                    <TextField.Slot>
                      <BsCardImage />
                    </TextField.Slot>
                    <TextField.Input
                      placeholder='spotId'
                      defaultValue={params.spotTitle}
                      {...register('spotId')}
                    />
                  </TextField.Root>
                </div>

                <Flex justify='between' className='mb-2'>
                  <Button type='submit' disabled={isSubmitting} color='grass' variant='solid'>
                    Save Spot{isSubmitting && <Spinner />}
                  </Button>
                  <Button
                    onClick={() => router.push(`/spots/${params.spotTitle}`)}
                    color='red'
                    variant='solid'
                  >
                    Cancel
                  </Button>
                </Flex>
              </Flex>
              {error && (
                <Callout.Root color='red'>
                  <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
              )}
            </Card>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewComment
