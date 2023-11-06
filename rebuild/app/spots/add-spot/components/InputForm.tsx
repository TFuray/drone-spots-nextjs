import { Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import axios from 'axios'
import 'easymde/dist/easymde.min.css'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { BsCardImage, BsImageFill } from 'react-icons/bs'
import SimpleMDE from 'react-simplemde-editor'

interface SpotForm {
  title: string
  city: string
  state: string
  latitude: number
  longitude: number
  description: string
  imageUrl: string
}

const InputForm = () => {
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<SpotForm>()
  console.log(register('latitude'))
  return (
    <form
      onSubmit={handleSubmit(async data => {
        await axios.post('/api/spots', data)
        router.push('/')
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
          <TextField.Root>
            <TextField.Input placeholder='City' {...register('city')} />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input placeholder='State' {...register('state')} />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              type='number'
              placeholder='Latitude'
              {...register('latitude', { valueAsNumber: true })}
            />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              type='number'
              placeholder='Longitude'
              {...register('longitude', { valueAsNumber: true })}
            />
          </TextField.Root>
          <Controller
            name='description'
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder='Description' {...field} />
            )}
          />

          <TextField.Root>
            <TextField.Slot>
              <BsCardImage />
            </TextField.Slot>
            <TextField.Input
              placeholder='Image Link'
              {...register('imageUrl')}
            />
          </TextField.Root>

          <Flex justify='between'>
            <Button color='grass' variant='solid'>
              Save Spot
            </Button>
            <Button color='red' variant='solid'>
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Card>
    </form>
  )
}
export default InputForm
