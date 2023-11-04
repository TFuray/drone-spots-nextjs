import { NextResponse } from 'next/server'
import { Post, IPost } from 'src/Models'
import { mongodb } from 'src/utils'

mongodb()

export async function GET() {
  try {
    const posts = await Post.find()
    return NextResponse.json(posts.reverse())
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}

// export async function GETLOCATION(req: Response) {
//   const query = new URL(req.url).searchParams
//   const region = query.get('region')
//   try {
//     const regionSpots = await Post.find({location})
//   } catch {
//     return NextResponse.json('error', {
//       status: 500
//     })
//   }
// }

export async function POST(req: Request) {
  try {
    const body: IPost = await req.json()
    const newPost = new Post(body)
    const saved = await newPost.save()
    return NextResponse.json(saved)
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}

export async function DELETE(req: Request) {
  const query = new URL(req.url).searchParams
  const id = query.get('id')
  try {
    const deletedPost = await Post.findByIdAndDelete(id)

    return NextResponse.json(deletedPost)
  } catch {
    return NextResponse.json(
      {
        error: 'Failed to remove post'
      },
      {
        status: 500
      }
    )
  }
}
