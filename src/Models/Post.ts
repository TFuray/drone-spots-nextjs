import mongoose, { Decimal128, Document, model, Model, Schema } from 'mongoose'

export interface IPost extends Document {
  title: string
  date: string
  content: string
  location: {
    city: string
    state: string
  }
  coordinates: {
    latitude: number
    longitude: number
  }
  imgUrl: string
}

const PostSchema: Schema = new Schema({
  title: {
    type: String
  },
  location: {
    city: { type: String },
    state: { type: String }
  },
  coordinates: {
    latitude: { type: Number },
    longitude: { type: Number }
  },
  content: {
    type: String
  },
  imgUrl: { type: String }
})

export const Post = (mongoose.models.Post ||
  model('Post', PostSchema)) as Model<IPost>
