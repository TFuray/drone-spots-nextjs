import { newSpotSchema } from '@/app/validationSchemas'
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
import 'easymde/dist/easymde.min.css'
import Link from 'next/link'
import ImageUpload from '@/components/ui/image-upload'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsCardImage, BsImageFill } from 'react-icons/bs'
import SimpleMDE from 'react-simplemde-editor'
import { useSession } from 'next-auth/react'
import { z } from 'zod'

type SpotForm = z.infer<typeof newSpotSchema>

const InputForm = () => {
  const router = useRouter()
  const { status, data: session } = useSession()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<SpotForm>({
    resolver: zodResolver(newSpotSchema)
  })

  // setValue('email', session?.user?.email!)

  return (
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
                {...register('latitude', { setValueAs: v => parseFloat(v) })}
              />
            </TextField.Root>
            {<ErrorMessage>{errors.latitude?.message}</ErrorMessage>}
            <TextField.Root>
              <TextField.Input
                type='float'
                placeholder='Longitude'
                {...register('longitude', { setValueAs: v => parseFloat(v) })}
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


            <TextField.Root >
              <TextField.Slot>
                <BsCardImage />
              </TextField.Slot>
              <TextField.Input
                placeholder='email'
                defaultValue={session?.user?.email!}
                {...register('email')}
              />
            </TextField.Root>
            <Flex justify='between' className='mb-2'>
              <Button disabled={isSubmitting} color='grass' variant='solid'>
                Save Spot{isSubmitting && <Spinner />}
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

      <Button color='red' variant='solid'>
        <Link href='/'>Cancel</Link>
      </Button>
    </div>
  )
}
export default InputForm
