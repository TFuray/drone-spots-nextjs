import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'
import authOptions from '../auth/authOptions'

export async function GET() {
  const session = await getServerSession(authOptions)
  const id = await prisma.user.findUnique({
    where: { email: session?.user?.email! }
  })
  return NextResponse.json(id, { status: 201 })
}
