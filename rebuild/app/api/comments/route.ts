import { newCommentSchema } from '@/app/validationSchemas'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'
import authOptions from '../auth/authOptions'

export async function POST(request: NextRequest) {
  // const { text, spotId, author } = await request.json()
  const body = await request.json()
  const session = await getServerSession(authOptions)
  const validation = newCommentSchema.safeParse(body)
  console.log(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 })
  }
  // const id = await prisma.user.findUnique({
  //   where: { email: session?.user?.email! }
  // })

  const newComment = await prisma.comment.create({
    data: {
      text: body.text,
      spotId: body.spotId,
      author: body.author
    }
  })
  return NextResponse.json(newComment, { status: 201 })
}

// export async function GET() {
//   try {
//     const comments = await prisma.comment.findMany()
//   } catch {
//     return NextResponse.json('error', {
//       status: 500
//     })
//   }
// }