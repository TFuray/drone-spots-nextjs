'use client'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { useObject } from 'react-kuh'

import Icon from 'bs-icon'
import useFetch, { revalidate } from 'http-react'
import Link from 'next/link'

import Header from 'components/Header'
import Input from 'components/Input'

function savePost() {
  revalidate('POST /posts')
}

export default function Create() {
  const router = useRouter()

  const [post, setPost] = useObject({
    title: '',
    location: {
      city: '',
      state: '',
      coordinates: {
        latitude: '',
        longitude: ''
      }
    },
    imgUrl: '',
    content: ''
  })

  const newPostDate = useMemo(() => Date.now(), [post])

  const newPost = {
    ...post,
    date: newPostDate
  }

  // This is not automatic, this is a mutation
  useFetch('/posts', {
    method: 'POST',
    body: { ...newPost, _id: undefined },
    onResolve() {
      router.back()
    }
  })

  return (
    <div>
      <Link href='/posts' className='btn gap-x-2 btn-ghost'>
        <Icon name='arrow-left' className='text-xl' /> Back
      </Link>
      <Header>Add Spot</Header>
      <div className='flex flex-wrap gap-2 w-full md:w-96 items-center justify-center space-y-2'>
        <div className='w-full'>
          <Input
            value={post.title}
            name='title'
            onChange={e =>
              setPost.write({
                title: e.target.value
              })
            }
            placeholder='Title'
          />
        </div>
        <div className='w-5/12'>
          <Input
            value={post.location.city}
            name='location.city'
            onChange={e =>
              setPost.write({
                location: { ...post.location, city: e.target.value }
              })
            }
            placeholder='City'
          />
        </div>
        <div className='w-5/12'>
          <Input
            value={post.location.state}
            name='location.state'
            onChange={e =>
              setPost.write({
                location: { ...post.location, state: e.target.value }
              })
            }
            placeholder='State'
          />
        </div>
        <div className='w-5/12'>
          <Input
            value={post.location.coordinates.latitude}
            name='location.coordinates.latitude'
            onChange={e =>
              setPost.write({
                location: {
                  ...post.location,
                  coordinates: {
                    ...post.location.coordinates,
                    latitude: e.target.value
                  }
                }
              })
            }
            placeholder='Latitude'
          />
        </div>
        <div className='w-5/12'>
          <Input
            value={post.location.coordinates.longitude}
            name='location.coordinates.longitude'
            onChange={e =>
              setPost.write({
                location: {
                  ...post.location,
                  coordinates: {
                    ...post.location.coordinates,
                    longitude: e.target.value
                  }
                }
              })
            }
            placeholder='Longitude'
          />
        </div>
        <div className='w-full'>
          <Input
            value={post.imgUrl}
            name='imgUrl'
            onChange={e =>
              setPost.write({
                imgUrl: e.target.value
              })
            }
            placeholder='Image URL'
          />
        </div>
        <div className='w-full'>
          <textarea
            placeholder='Description'
            className='textarea textarea-bordered h-32 resize-none w-full'
            name='content'
            onChange={e =>
              setPost.write({
                content: e.target.value
              })
            }
          ></textarea>
        </div>
        <div className='w-full text-center'>
          <button onClick={savePost} className='btn gap-x-2'>
            <span>Save</span>
            <Icon name='disc' className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}
