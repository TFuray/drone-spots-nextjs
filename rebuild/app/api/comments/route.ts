import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import authOptions from '../auth/authOptions'
import { getServerSession } from "next-auth/next";

export async function POST(request: NextRequest) {
  // const { text, spotId, author } = await request.json()
  const body = await request.json()
  const session = await getServerSession(authOptions)
  // const id = await prisma.user.findUnique({
  //   where: { email: session?.user?.email! }
  // })

  const newComment = await prisma.comment.create({
    data: {
      text: body.text,
      spotId: body.spotId,
      author: body.author,
    }
  })
  return NextResponse.json(newComment, {status: 201})
}
