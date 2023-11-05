import prisma from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const newSpotSchema = z.object({
  title: z.string().min(1).max(255),
  city: z.string().min(1),
  state: z.string().min(1),
  latitude: z.number().min(1),
  longitude: z.number().min(1),
  description: z.string().min(1),
  imageUrl: z.string()
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = newSpotSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
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
