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
