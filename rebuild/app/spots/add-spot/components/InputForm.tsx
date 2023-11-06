import { newSpotSchema } from '@/app/validationSchemas'
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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsCardImage, BsImageFill } from 'react-icons/bs'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'

type SpotForm = z.infer<typeof newSpotSchema>

const InputForm = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SpotForm>({
    resolver: zodResolver(newSpotSchema)
  })
  return (
    <div>
      <form
        onSubmit={handleSubmit(async data => {
          try {
            await axios.post('/api/spots', data)
            router.push('/')
          } catch (error) {
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
            {errors.title && <Text color='red'>{errors.title.message}</Text>}
            <TextField.Root>
              <TextField.Input placeholder='City' {...register('city')} />
            </TextField.Root>
            {errors.city && <Text color='red'>{errors.city.message}</Text>}
            <TextField.Root>
              <TextField.Input placeholder='State' {...register('state')} />
            </TextField.Root>
            {errors.state && <Text color='red'>{errors.state.message}</Text>}
            <TextField.Root>
              <TextField.Input
                type='number'
                placeholder='Latitude'
                {...register('latitude', { valueAsNumber: true })}
              />
            </TextField.Root>
            {errors.latitude && (
              <Text color='red'>{errors.latitude.message}</Text>
            )}
            <TextField.Root>
              <TextField.Input
                type='number'
                placeholder='Longitude'
                {...register('longitude', { valueAsNumber: true })}
              />
            </TextField.Root>
            {errors.longitude && (
              <Text color='red'>{errors.longitude.message}</Text>
            )}
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <SimpleMDE placeholder='Description' {...field} />
              )}
            />

            {errors.description && (
              <Text color='red' as='p'>
                {errors.description.message}
              </Text>
            )}
            <TextField.Root>
              <TextField.Slot>
                <BsCardImage />
              </TextField.Slot>
              <TextField.Input
                placeholder='Image Link'
                {...register('imageUrl')}
              />
            </TextField.Root>
            {errors.imageUrl && (
              <Text color='red'>{errors.imageUrl.message}</Text>
            )}
            <Flex justify='between' className='mb-2'>
              <Button color='grass' variant='solid'>
                Save Spot
              </Button>
              <Button color='red' variant='solid'>
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
  )
}
export default InputForm
