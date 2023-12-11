'use client'

import authOptions from '@/app/api/auth/authOptions'
import { newSpotSchema } from '@/app/validationSchemas'
import ErrorMessage from '@/components/ui/ErrorMessage'
import Spinner from '@/components/ui/Spinner'
import prisma from '@/lib/prismadb'
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
import 'easymde/dist/easymde.min.css'
import { getServerSession } from 'next-auth'
// import 'leaflet-defaulticon-compatibility'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { notFound, redirect, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsCardImage, BsImageFill } from 'react-icons/bs'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'

type SpotForm = z.infer<typeof newSpotSchema>
interface Props {
  params: { id: string }
}

const EditIssuePage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions)
  console.log(session?.user?.email)

  const spot = await prisma.spot.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!spot) {
    notFound()
  }
  
  if (spot.email != session?.user?.email) {
    redirect('/')
  }

  const router = useRouter()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SpotForm>({
    resolver: zodResolver(newSpotSchema)
  })

  return (
    <div className='flex gap-6 mt-10 justify-center place-items-center'>
      <div className='flex grow-0'>
        <div>
          <form
            onSubmit={handleSubmit(async data => {
              try {
                setIsSubmitting(true)
                await axios.post('/api/spots', data)
                router.push('/')
              } catch (error) {
                setIsSubmitting(false)
                setError('An unexpected error occured.')
              }
            })}
          >
            <Card size='2' style={{ width: 500 }}>
              <Flex direction='column' gap='3'>
                <Heading size='6'>Add Spot</Heading>
                <TextField.Root>
                  <TextField.Slot>
                    <BsImageFill />
                  </TextField.Slot>
                  <TextField.Input placeholder='Title' {...register('title')} />
                </TextField.Root>
                {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
                <TextField.Root>
                  <TextField.Input placeholder='City' {...register('city')} />
                </TextField.Root>
                {<ErrorMessage>{errors.city?.message}</ErrorMessage>}
                <TextField.Root>
                  <TextField.Input placeholder='State' {...register('state')} />
                </TextField.Root>
                {<ErrorMessage>{errors.state?.message}</ErrorMessage>}
                <TextField.Root>
                  <TextField.Input
                    type='float'
                    placeholder='Latitude'
                    {...register('latitude', {
                      setValueAs: v => parseFloat(v)
                    })}
                  />
                </TextField.Root>
                {<ErrorMessage>{errors.latitude?.message}</ErrorMessage>}
                <TextField.Root>
                  <TextField.Input
                    type='float'
                    placeholder='Longitude'
                    {...register('longitude', {
                      setValueAs: v => parseFloat(v)
                    })}
                  />
                </TextField.Root>
                {<ErrorMessage>{errors.longitude?.message}</ErrorMessage>}
                <Controller
                  name='description'
                  control={control}
                  render={({ field }) => (
                    <SimpleMDE placeholder='Description' {...field} />
                  )}
                />

                {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
                <TextField.Root>
                  <TextField.Slot>
                    <BsCardImage />
                  </TextField.Slot>
                  <TextField.Input
                    placeholder='Image Link'
                    {...register('imageUrl')}
                  />
                </TextField.Root>
                {<ErrorMessage>{errors.imageUrl?.message}</ErrorMessage>}

                <div className='hidden'>
                  <TextField.Root>
                    <TextField.Slot>
                      <BsCardImage />
                    </TextField.Slot>
                    <TextField.Input
                      placeholder='email'
                      defaultValue={session?.user?.email!}
                      {...register('email')}
                    />
                  </TextField.Root>
                </div>

                <Flex justify='between' className='mb-2'>
                  <Button disabled={isSubmitting} color='grass' variant='solid'>
                    Save Spot{isSubmitting && <Spinner />}
                  </Button>
                  <Button
                    onClick={() => router.push('/')}
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
    </div>
  )
}
export default EditIssuePage
