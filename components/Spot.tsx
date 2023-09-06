'use client'
import Icon from 'bs-icon'
import useFetch, { revalidate } from 'http-react'
import Link from 'next/link'


import { Card } from '@rewind-ui/core'

import Header from 'components/Header'
import { IPost } from 'src/Models/Post'

// function confirmPostDelete(id: any) {
//   const confirmation = confirm('Do you want to remove this post?')
//   if (confirmation) {
//     revalidate(id)
//   }
// }

// function Post(props: Partial<IPost>) {
//   const fetchID = {
//     post: props
//   }

//   useFetch('/posts', {
//     id: fetchID,
//     method: 'DELETE',
//     query: {
//       id: props._id
//     },
//     onResolve() {
//       revalidate('GET /posts')
//     }
//   })

//   return (
//     <div
//       // style={{
//       //   transition: '0.12s'
//       // }}
//       // className='text-primary-content p-4 relative break-words rounded-lg leading-3 '
//       key={`post-${props._id}`}
//     >
//       <Card color='slate' shadow='md' size='sm'>
//         <Card.Header>{props.title}</Card.Header>
//         <Card.Body>{props.content}</Card.Body>
//       </Card>
//       {/* <button
//         className='btn btn-ghost text-primary-content font-semibold absolute top-1 right-1 cursor-pointer'
//         onClick={() => confirmPostDelete(fetchID)}
//       >
//         <Icon name='trash' className='text-xl text-red-700' />
//       </button>
//       <b className=' text-black my-2'>{props.title}</b>
//       <br />
//       <p className='my-4 text-black'>{props.content}</p> */}
//     </div>
//   )
// }

export default function Spot() {
  const { data, loadingFirst, error } = useFetch<IPost[]>('/posts', {
    default: []
  })

  if (loadingFirst)
    return <p className='text-2xl font-semibold py-4'>Loading posts...</p>

  if (error)
    return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

    const fetchData = async (id: any) => {
      try {
        const response = await fetch(`/api/delete?id=${id}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          const data = await response.json()
        console.log(data)
        } else {
          console.error('Failed to remove post')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    function confirmPostDelete(id: any) {
      // const confirmation = confirm('Do you want to remove this post?')
      // if (confirmation) {
        fetchData(id)
    // useFetch('/posts', {
    //   id: fetchID,
    //   method: 'DELETE',
    //   query: {
    //     id: props._id
    //   },
    //   onResolve() {
    //     revalidate('GET /posts')
    //   }
    // })
      // }
    }

    // useFetch('/posts', {
    //   id: fetchID,
    //   method: 'DELETE',
    //   query: {
    //     id: props._id
    //   },
    //   onResolve() {
    //     revalidate('GET /posts')
    //   }
    // })

  return (
    <div>
      <ul
      // className='py-4 grid grid-cols-1 rounded-md'
      >
        <div className='overflow-x-auto'>
          <table className='table table-sm bg-base-200 '  >
            {/* head */}
            <thead className='bg-base-300 text-center'>
              <tr>
                <th></th>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className='text-center text-sm'>
              {/* row 1 */}
              {data.map((post, index) => (
                <tr className='hover' key={index}>
                  <th>{index + 1}</th>
                  <td>{post.title}</td>
                  <td>
                    {post.location.city}
                  </td>
                  <td>
                    {post.location.state}
                  </td>
                  <td>{post.content}</td>
                  {/* <td>
                    <button
                      className='btn btn-ghost text-primary-content font-semibold cursor-pointer'
                      onClick={() => confirmPostDelete(post._id)}
                    >
                      <Icon name='trash' className='text-xl text-red-700' />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ul>
    </div>
  )
}