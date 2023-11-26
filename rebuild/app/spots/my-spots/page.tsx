import authOptions from '@/app/api/auth/authOptions'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import prisma from '@/lib/prismadb'
import { Avatar, Box, Flex, Grid, Heading, Table, Text } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

const page = async () => {
  const session = await getServerSession(authOptions)

  // console.log(session?.user?.email)
  const spots = await prisma.spot.findMany({
    where: {
      email: `${session?.user?.email}`
    }
  })
  console.log(spots.length)

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

              <CardTitle className='w-2/3'>
                <Link href={`/spots/my-spots/${spot.id}`}>{spot.title}</Link>
              </CardTitle>
              <CardDescription className='w-2/3 line-clamp-2 text-gray-600'>
                {spot.city}, {spot.state}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text>{spot.description}</Text>
            </CardContent>
          </Card>
        ))}
      </Grid>

      {/* <Box className='w-1/2 pl-10'>
        <Table.Root size='2' variant='surface'>
          <Table.Header>
            <Table.Row align='center'>
              <Table.ColumnHeaderCell justify='center'>
                Title
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify='center'>
                Location
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify='center'>
                Description
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify='center'>
                Image
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {spots.map(spot => (
              <Table.Row key={spot.id}>
                <Table.Cell>
                  <Link href={`/spots/my-spots/${spot.id}`}>{spot.title}</Link>
                </Table.Cell>
                <Table.Cell>
                  {spot.city} {spot.state}
                </Table.Cell>
                <Table.Cell className=''>{spot.description}</Table.Cell>
                <Table.Cell>{spot.imageUrl}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box> */}
    </>
  )
}
export default page
