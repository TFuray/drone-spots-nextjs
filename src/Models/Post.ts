import mongoose, { Document, model, Model, Schema } from 'mongoose'

export interface IPost extends Document {
  title: string
  date: string
  content: string
  coordinates: { lat: number; lng: number }
}

const PostSchema: Schema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  content: {
    type: String
  },
  coordinates: {
    type: Object
  }
})

export const Post = (mongoose.models.Post ||
  model('Post', PostSchema)) as Model<IPost>
