import authOptions from '@/app/api/auth/authOptions'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'

interface Props {
  params: { id: string }
}

const MySpotsPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions)
  console.log(session)

  const id = await prisma.user.findUnique({
    where: { email: session?.user?.email! }
  })
  console.log(id?.id)
  return <div>My custom Spots</div>
}
export default MySpotsPage
