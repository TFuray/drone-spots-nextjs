'use client'
import Icon from 'bs-icon'
import useFetch, { revalidate } from 'http-react'
import Link from 'next/link'

import Header from 'components/Header'
import { IPost } from 'src/Models/Post'

function confirmPostDelete(id: any) {
  const confirmation = confirm('Do you want to remove this post?')
  if (confirmation) {
    revalidate(id)
  }
}

function Post(props: Partial<IPost>) {
  const fetchID = {
    post: props
  }

  useFetch('/posts', {
    id: fetchID,
    method: 'DELETE',
    query: {
      id: props._id
    },
    onResolve() {
      revalidate('GET /posts')
    }
  })

  return (
    <li
      style={{
        transition: '0.12s'
      }}
      className='text-primary-content p-4 relative break-words rounded-lg '
      key={`post-${props._id}`}
    >
      <button
        className='btn btn-ghost text-primary-content font-semibold absolute top-1 right-1 cursor-pointer'
        onClick={() => confirmPostDelete(fetchID)}
      >
        <Icon name='trash' className='text-xl text-red-700' />
      </button>
      <b className=' text-black my-2'>{props.title}</b>
      <br />
      <p className='my-4 text-black'>{props.content}</p>
    </li>
  )
}

export default function Spot() {
  const { data, loadingFirst, error } = useFetch<IPost[]>('/posts', {
    default: []
  })

  if (loadingFirst)
    return <p className='text-2xl font-semibold py-4'>Loading posts...</p>

  if (error)
    return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

  return (
    <div>
      <ul className='py-4 grid grid-cols-1 rounded-md'>
        {data.map(post => (
          <Post {...post} key={`post-${post._id}`} />
        ))}
      </ul>
    </div>
  )
}