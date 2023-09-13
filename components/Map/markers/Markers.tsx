import {Marker, Popup} from 'react-leaflet'
import { useState, useEffect } from 'react'
import useFetch from 'http-react'
import { IPost } from 'src/Models/Post'

const Markers = () => {
  const [positions, setPositions] = useState([])

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
            <h1 className='text-lg'>{post.title} </h1>
            
            <button
              className='btn btn-sm'
              onClick={() => window.my_modal_1.showModal()}
            >
              open modal
            </button>
            <dialog id='my_modal_1' className='modal'>
              <div className='modal-box'>
                <h3 className='font-bold text-lg'>{post.content}</h3>
                <p className='py-4'>
                  Press ESC key or click the button below to close
                </p>
                <div className='modal-action'>
                  <form method='dialog'>
                    {/* if there is a button in form, it will close the modal */}
                    <button className='btn'>Close</button>
                  </form>
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