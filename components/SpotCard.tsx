import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography
} from '@material-tailwind/react'
import { IPost } from 'src/Models'

export function SpotCard({ post, key }: { post: IPost | undefined; key: number }) {
  return (
    
    <Card
      color='white'
      shadow={true}
      className='w-full min-w-[20rem] max-w-[20rem] mb-2 hover:bg-[#d8d8d8]'
    >
      <CardHeader
        color='transparent'
        floated={false}
        shadow={false}
        className='mx-auto flex items-center '
      >
        {/* <Avatar size='lg' variant='circular' alt='tania andrew' /> */}
        <div className='flex w-full flex-col gap-0.5'>
          <div className='flex items-center justify-between'>
            <Typography variant='h5' color='blue-gray'>
              {post?.title}
            </Typography>
          </div>
          <Typography color='blue-gray'>
            {post?.location.city}, {post?.location.state}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className=' p-0'>
      </CardBody>
    </Card>
  )
}
