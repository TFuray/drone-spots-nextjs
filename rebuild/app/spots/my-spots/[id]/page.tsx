import prisma from '@/lib/prismadb'
import { useSession } from 'next-auth/react'

interface Props {
  params: { id: string }
}

const MySpots = ({ params }: Props) => {
  const { status, data: session } = useSession()

  const id = prisma.user.findUnique({
    where: { email: session?.user?.email! }
  })
  return <div>MySpots</div>
}
export default MySpots
