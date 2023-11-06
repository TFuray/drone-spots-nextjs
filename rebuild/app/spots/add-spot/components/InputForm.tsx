import { Card, Flex, TextField, Text, Heading, Button } from '@radix-ui/themes'
import {BsImageFill, BsCardImage} from 'react-icons/bs'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

const InputForm = () => {
  return (
    <Card size='2' style={{ width: 500 }}>
      <Flex direction='column' gap='3'>
        <Heading size='6'>Add Spot</Heading>
        <TextField.Root>
          <TextField.Slot>
            <BsImageFill />
          </TextField.Slot>
          <TextField.Input placeholder='Title' />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder='City' />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder='State' />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder='Latitude' />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder='Longitude' />
        </TextField.Root>

        <SimpleMDE placeholder='Description' />

        <TextField.Root>
          <TextField.Slot>
            <BsCardImage />
          </TextField.Slot>
          <TextField.Input placeholder='Image Link' />
        </TextField.Root>

        <Flex justify='between' >

      <Button color='grass' variant='solid'>Save Spot</Button>
      <Button color='red' variant='solid'>Cancel</Button>
        </Flex>
      </Flex>
    </Card>
  )
}
export default InputForm
