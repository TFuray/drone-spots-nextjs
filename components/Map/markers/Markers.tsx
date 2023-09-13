import useFetch from 'http-react'
import { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { IPost } from 'src/Models/Post'

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
            <dialog id={`my_modal_${index}`} className='modal'>
              <div className='modal-box card card-side card-bordered bg-base-100 shadow-xl'>
                <figure>
                  <img width={'200px'} src={post.imgUrl} alt='spot picture' />
                </figure>
                <div className='card-body'>
                  <h3 className='card-title'>{post.title}</h3>
                  <p className=''>{post.content}</p>
                  <div className='modal-action card-actions'>
                    <form method='dialog'>
                      {/* if there is a button in form, it will close the modal */}
                      <button className='btn'>Close</button>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </Popup>
        </Marker>
      ))}
    </>
  )
}
export default Markers
