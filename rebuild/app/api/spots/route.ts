import prisma from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'
import { newSpotSchema } from '../../validationSchemas'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = newSpotSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 })
  }

  const newSpot = await prisma.spot.create({
    data: {
      title: body.title,
      email: body.email,
      city: body.city,
      state: body.state,
      latitude: body.latitude,
      longitude: body.longitude,
      description: body.description,
      imageUrl: body.imageUrl
    }
  })
  return NextResponse.json(newSpot, { status: 201 })
}

export async function GET() {
  try {
    const spots = await prisma.spot.findMany()
    return NextResponse.json(spots)
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}
