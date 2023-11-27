import authOptions from "@/app/api/auth/authOptions"
import prisma from "@/lib/prismadb"
import { getServerSession } from "next-auth"
import { notFound, redirect } from "next/navigation"

interface Props {
  params: { id: string}
}

const SpotDetailPage = async ({params} : Props) => {
  const session = await getServerSession(authOptions)
  console.log(session?.user?.email)

  const spot = await prisma.spot.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!spot) {
    notFound()
  }
  if (spot.email != session?.user?.email) {

    redirect('/')
  }

  return (
    <div>
      <p>{spot.title}</p>
      <p>{spot.city}</p>
      <p>{spot.createdAt.toDateString()}</p>
    </div>
  )
}
export default SpotDetailPage