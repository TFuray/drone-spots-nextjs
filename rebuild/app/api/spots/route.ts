import prisma from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const newSpotSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required.'),
  latitude: z.number().min(1, 'Latitude is required.'),
  longitude: z.number().min(1, 'Longitude is requried'),
  description: z.string().min(1, 'Description is required'),
  imageUrl: z.string()
})

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
  return NextResponse.json(newSpot, {status:201})
}
