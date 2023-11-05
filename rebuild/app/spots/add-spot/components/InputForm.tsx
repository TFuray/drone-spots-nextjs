import { Card, Flex, TextArea, TextField, Text, Heading } from '@radix-ui/themes'
import {BsImageFill, BsCardImage} from 'react-icons/bs'

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

        <TextArea placeholder='Description' />

        <TextField.Root>
          <TextField.Slot>
            <BsCardImage />
          </TextField.Slot>
          <TextField.Input placeholder='Image Link' />
        </TextField.Root>
      </Flex>
    </Card>
  )
}
export default InputForm
