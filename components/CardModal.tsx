import type { CardProps } from '@material-tailwind/react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography
} from '@material-tailwind/react'
import { IPost, Post } from '../src/Models/Post'

export function CardModal({ post }: { post: IPost }) {
  return (
    <Card className='w-96'>
      <CardHeader shadow={true} floated={false} className='h-96'>
        <img
          src={post.imgUrl}
          alt='card-image'
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody>
        <div className='mb-2 flex items-center justify-between'>
          <Typography color='blue-gray' className='font-medium'>
            {post.title}
          </Typography>
          <Typography color='blue-gray' className='font-medium'>
            {post.location.city}
          </Typography>
        </div>
        <Typography
          variant='small'
          color='gray'
          className='font-normal opacity-75'
        >
          {post.content}
        </Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'>
            Close
          </button>
        </form>
      </CardFooter>
    </Card>
  )
}
