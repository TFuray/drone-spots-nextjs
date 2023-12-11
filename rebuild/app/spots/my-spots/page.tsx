import authOptions from '@/app/api/auth/authOptions'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import prisma from '@/lib/prismadb'
import { Avatar, Box, Button, Grid, Heading, Text } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'
import { FaTrashAlt } from 'react-icons/fa'

const page = async () => {
  const session = await getServerSession(authOptions)

  // console.log(session?.user?.email)
  const spots = await prisma.spot.findMany({
    where: {
      email: `${session?.user?.email}`
    }
  })

  return (
    <>
      <Box>
        <Heading
          weight='bold'
          size='8'
          className='pl-10 py-4 w-1/2 text-primary'
        >
          My Spots
        </Heading>
      </Box>

      <Grid className='m-4 ' columns='3' gap='3' width='auto'>
        {spots.map(spot => (
          <Card key={spot.id} className='bg-slate-300'>
            <CardHeader className='relative'>
              <div className='absolute top-0 right-0 mr-3 mt-3'>
                <Avatar size='6' src={spot.imageUrl} fallback='img'></Avatar>
              </div>

              <CardTitle className='w-2/3'>{spot.title}</CardTitle>
              <CardDescription className='w-2/3 line-clamp-2 text-gray-600'>
                {spot.city}, {spot.state}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text>{spot.description}</Text>
            </CardContent>
            <div className='flex justify-end mr-4 mb-4'>
              <Button
                color='red'
                // onClick={() => {
                //   prisma.spot.delete({
                //     where: {
                //       id: spot.id
                //     }
                //   })
                // }}
              >
                <FaTrashAlt />
                {/* <Link href={`/spots/my-spots/${spot.id}/edit`}>Edit</Link> */}
              </Button>
            </div>
          </Card>
        ))}
      </Grid>
    </>
  )
}
export default page
