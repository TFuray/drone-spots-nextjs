'use client'
import { useRouter } from 'next/navigation'
import { use, useMemo, useRef, useState } from 'react'
import { useObject } from 'react-kuh'

import axios from 'axios'
import Icon from 'bs-icon'
import useFetch, { revalidate } from 'http-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import Header from '../../components/Header'
import Input from '../../components/Input'
import { useDraggingCoordinatesStore } from 'store/store'
import { ReverseGeo } from 'types/reverseGeo'

export default function Create() {
  const router = useRouter()
  const { lat, lng } = useDraggingCoordinatesStore(state => state)
  const [post, setPost] = useState({
    title: '',
    location: {
      city: '',
      state: ''
    },
    coordinates: {
      latitude: lat,
      longitude: lng,
      position: [lat, lng]
    },
    imgUrl: '',
    content: ''
  })
  const my_modal_1 = useRef<HTMLDialogElement>(null)

  const newPostDate = useMemo(() => Date.now(), [post])

  const newPost = {
    ...post,
    date: newPostDate
  }
  const setDraggingCoordinates = useDraggingCoordinatesStore(
    state => state.setDraggingCoordinates
  )

  const coordsToCity = async (latt: number, lonn: number) => {
    try {
      const response = await axios.get<ReverseGeo>(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latt}&lon=${lonn}&zoom=10`
      )
      const data = response.data
      console.log(data)

      setPost({
        ...post,
        location: {
          city: data.name,
          state: data.address.state
        },
        coordinates: {
          latitude: lat,
          longitude: lng,
          position: [lat, lng]
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  function savePost() {
    revalidate('POST /posts')
  }

  // This is not automatic, this is a mutation
  useFetch('/posts', {
    method: 'POST',
    body: { ...newPost, _id: undefined },
    onResolve() {
      router.back()
    }
  })

  const MapWithNoSSR = dynamic(() => import('../../components/Map/MapDragMarker'), {
    ssr: false
  })

  return (
    <div className='flex justify-around'>
      <div>
        <Link href='/' className='btn gap-x-2 btn-ghost'>
          <Icon name='arrow-left' className='text-xl' /> Back
        </Link>
        <Header>Add Spot</Header>
        <div className='flex flex-wrap gap-2 w-full md:w-96 items-center justify-center space-y-2'>
          <div className='w-full'>
            <Input
              value={post.title}
              name='title'
              onChange={e => setPost({ ...post, title: e.target.value })}
              placeholder='Title'
            />
          </div>
          <div className='w-5/12'>
            <Input
              value={lat}
              name='location.coordinates.latitude'
              onChange={e =>
                setPost({
                  ...post,
                  coordinates: {
                    ...post.coordinates,
                    latitude: {
                      ...post.coordinates,
                      latitude: setDraggingCoordinates({
                        lat: Number(e.target.value),
                        lng
                      })
                    }
                  }
                })
              }
              placeholder='Latitude'
            />
          </div>
          <div className='w-5/12'>
            <Input
              value={lng}
              name='location.coordinates.longitude'
              onChange={e =>
                setPost({
                  ...post,
                  coordinates: {
                    ...post.coordinates,
                    longitude: {
                      ...post.coordinates,
                      longitude: setDraggingCoordinates({
                        lat,
                        lng: Number(e.target.value)
                      })
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
                setPost({...post,
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
              onChange={e => setPost({ ...post, content: e.target.value })}
            ></textarea>
          </div>
          <div className='w-full text-center'>
            <button
              onClick={() => (
                coordsToCity(lat, lng), my_modal_1.current?.showModal()
              )}
              className='btn gap-x-2'
            >
              <span>Save</span>

              <Icon name='disc' className='text-xl' />
            </button>
            <dialog ref={my_modal_1} className='modal'>
              <div className='modal-box text-xl'>
                Confirm
                <p className='py-4'>Click Save to confirm</p>
                <div className='modal-action flex justify-center'>
                  <form method='dialog flex'>
                    {/* if there is a button in form, it will close the modal */}
                    <button className='btn mr-3' onClick={savePost}>
                      Save
                    </button>
                    <button className='btn'>Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <div
        className='w-1/2 border-4 rounded-[2.3rem] shadow-2xl ml-2'
        id='map'
        style={{ height: '660px' }}
      >
        <MapWithNoSSR />
      </div>
    </div>
  )
}
