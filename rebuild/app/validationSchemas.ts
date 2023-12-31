import { z } from 'zod'

export const newSpotSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  email: z.string().min(1, 'Must be signed in.'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required.'),
  latitude: z.number().min(1, 'Latitude is required.'),
  longitude: z.number().min(1, 'Longitude is requried'),
  description: z.string().min(1, 'Description is required'),
  imageUrl: z.string()
})

export const newCommentSchema = z.object({
  text: z.string().min(1, 'Comment is requried'),
  spotId: z.number(),
  author: z.string()
})
