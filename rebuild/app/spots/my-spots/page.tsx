import authOptions from '@/app/api/auth/authOptions'
import prisma from '@/lib/prismadb'
import { Heading, Table, Box,  } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'


const page = async () => {
  const session = await getServerSession(authOptions)


  console.log(session?.user?.email)
  // const spots = await prisma.spot.findMany({
  //   where: {
  //     email: {
  //       contains: `${session.email}`
  //     }
  //   }
  //   }
  // })

  return (
    <>
      <Box>
      <Heading className='p-4 w-1/2'>My Spots</Heading>
    </Box>

      <Box>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* {spots.map(spot => (
            <Table.Row key={spot.id}>
              <Table.Cell>{spot.title}</Table.Cell>
              <Table.Cell>
                {spot.city} {spot.state}
              </Table.Cell>
              <Table.Cell>{spot.description}</Table.Cell>
              <Table.Cell>{spot.imageUrl}</Table.Cell>
            </Table.Row>
          ))} */}
        </Table.Body>
      </Table.Root>
          </Box>
    </>
  )
}
export default page
