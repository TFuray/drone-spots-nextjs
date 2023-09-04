'use client'
import { useRouter } from 'next/navigation'
import { use, useMemo, useState } from 'react'
import { useObject } from 'react-kuh'

import axios from 'axios'
import Icon from 'bs-icon'
import useFetch, { revalidate } from 'http-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import Header from 'components/Header'
import Input from 'components/Input'
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
      longitude: lng
    },
    imgUrl: '',
    content: ''
  })

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

      setPost({...post,
        location: {
          city: data.name,
          state: data.address.state
        }
      })
      //  setPost.write({
        //    location: { ...post.location, city: data.name }
        //    location: {...post.location, state: data.}
        //  })
      } catch (error) {
        console.log(error)
      }
      savePost()
  }

  function savePost() {
    revalidate('POST /posts')
  }

  // This is not automatic, this is a mutation
  useFetch('/posts', {
    method: 'POST',
    body: { ...post, _id: undefined },
    onResolve() {
      router.back()
    }
  })

  const MapWithNoSSR = dynamic(() => import('components/Map/MapDragMarker'), {
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
          {/* <div className='w-5/12'>
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
          </div> */}
          <div className='w-5/12'>
            <Input
              value={lat}
              name='location.coordinates.latitude'
              onChange={e =>
                setPost({
                  ...post,
                  coordinates: {
                    latitude: e.target.value,
                    longitude: lng
                  }
                })
              }
              // setPost.write({
              //   coordinates: {
              //     ...post.coordinates,
              //     latitude: {
              //       ...post.coordinates,
              //       latitude: setDraggingCoordinates({
              //         lat: Number(e.target.value),
              //         lng
              //       })
              //     }
              //   }
              // })
              placeholder='Latitude'
            />
          </div>
          <div className='w-5/12'>
            <Input
              value={lng}
              name='location.coordinates.longitude'
              // onChange={e =>
              //   setPost.write({
              //     coordinates: {
              //       ...post.coordinates,
              //       longitude: {
              //         ...post.coordinates,
              //         longitude: setDraggingCoordinates({
              //           lat,
              //           lng: Number(e.target.value)
              //         })
              //       }
              //     }
              //   })
              // }
              onChange={e =>
                setPost({
                  ...post,
                  coordinates: {
                    latitude: lat,
                    longitude: e.target.value
                  }
                })
              }
              placeholder='Longitude'
            />
          </div>
          {/* <div className='w-full'>
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
          </div> */}
          <div className='w-full'>
            <textarea
              placeholder='Description'
              className='textarea textarea-bordered h-32 resize-none w-full'
              name='content'
              // onChange={e =>
              //   setPost.write({
              //     content: e.target.value
              //   })
              // }
              onChange={e => setPost({ ...post, content: e.target.value })}
            ></textarea>
          </div>
          <div className='w-full text-center'>
            <button onClick={()=>coordsToCity(post.coordinates.latitude, post.coordinates.longitude)} className='btn gap-x-2'>
              <span>Save</span>
              <Icon name='disc' className='text-xl' />
            </button>
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
