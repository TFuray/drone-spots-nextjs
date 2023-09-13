import useFetch from 'http-react'
import { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { IPost } from 'src/Models/Post'
import { CardModal } from 'components/CardModal'

const Markers = () => {
  const { data, loadingFirst, error } = useFetch<IPost[]>('/posts', {
    default: []
  })

  if (loadingFirst)
    return <p className='text-2xl font-semibold py-4'>Loading posts...</p>

  if (error)
    return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

  //fetch spot data

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

  return (
    <>
      {data.map((post, index) => (
        <Marker
          key={index}
          position={[post.coordinates.latitude, post.coordinates.longitude]}
        >
          <Popup>
            <h1 className='text-lg'>
              <span className='font-bold text-[.9rem] tabular-nums align-super'>
                {index + 1}.{' '}
              </span>
              {post.title}{' '}
            </h1>

            <button
              className='btn btn-sm'
              onClick={() => {
                const modal = document.getElementById(
                  `my_modal_${index}`
                ) as HTMLDialogElement | null
                if (modal) {
                  modal.showModal()
                }
              }}
            >
              See More
            </button>
          </Popup>
          <dialog id={`my_modal_${index}`} className='modal'>
                <CardModal post={post}/>
          </dialog>
        </Marker>
      ))}
    </>
  )
}
export default Markers
