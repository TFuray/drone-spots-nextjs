
import prisma from "@/lib/prismadb"
import { Table } from "@radix-ui/themes"

const SpotsList = async () => {

  const spots = await prisma.spot.findMany()

  return (
    <div>
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
          {spots.map(spot => (
            <Table.Row key={spot.id}>
              <Table.Cell>{spot.title}</Table.Cell>
              <Table.Cell>{spot.city} {spot.state}</Table.Cell>
              <Table.Cell>{spot.description}</Table.Cell>
              <Table.Cell>{spot.imageUrl}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
export default SpotsList