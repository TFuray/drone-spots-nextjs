'use client'
import prisma from '@/lib/prismadb'
import { Spot } from '@prisma/client'
import { Card, Flex, Heading, ScrollArea, Text } from '@radix-ui/themes'
import useFetch from 'http-react'

const SpotsList = () => {

  interface SpotType {
    map(arg0: (spot: any) => import("react").JSX.Element): import("react").ReactNode
    id: number
    title: string
    city: string
    state: string
    description: string
    imageUrl: string
    email: string
    default: [any]
  }

  const { data, error } = useFetch<SpotType>('/api/spots', {
    //@ts-ignore
    default: []
  })

  return (
    <div className='m-4'>
      <ScrollArea type='auto' scrollbars='vertical' style={{ height: 800 }}>
        <Flex direction='column' gap='2'>
          {data.map(spot => (
            <div
              key={spot.id}
              className='hover:cursor-pointer '
              onClick={() => {
                const modal = document.getElementById(
                  `my_modal_${spot.id}`
                ) as HTMLDialogElement | null
                if (modal) {
                  modal.showModal()
                }
              }}
            >
              <Card>
                <Heading size='4'>{spot.title.toUpperCase()}</Heading>
                <Text size='2' color='gray'>
                  {spot.city}, {spot.state}
                </Text>
                <br />
                <Text className='line-clamp-2' size='3'>
                  {spot.description}
                </Text>
              </Card>
            </div>
          ))}
        </Flex>
      </ScrollArea>
    </div>
  )
}
export default SpotsList

{
  /* <Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {data.map(spot => (
      <Table.Row key={spot.id}>
        <Table.Cell>{spot.title}</Table.Cell>
        <Table.Cell>{spot.city} {spot.state}</Table.Cell>
        <Table.Cell>{spot.description}</Table.Cell>
        <Table.Cell>{spot.imageUrl}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root> */
}
