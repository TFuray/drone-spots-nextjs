'use client'

import { newSpotSchema } from '@/app/validationSchemas'
import ErrorMessage from '@/components/ui/ErrorMessage'
import Spinner from '@/components/ui/Spinner'
import { useDraggingCoordinatesStore } from '@/store/store'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Callout,
  Card,
  Flex,
  Heading,
  Text,
  TextField
} from '@radix-ui/themes'
import axios from 'axios'
import 'easymde/dist/easymde.min.css'
import { Icon } from 'leaflet'
// import 'leaflet-defaulticon-compatibility'
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
// import 'leaflet/dist/leaflet.css'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsCardImage, BsImageFill } from 'react-icons/bs'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'

type SpotForm = z.infer<typeof newSpotSchema>

const AddSpot = () => {
  // const MapWithNoSSR = dynamic(() => import('./components/AddMap'), {
  //   ssr: false
  // })

  const { status, data: session } = useSession()

  const router = useRouter()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SpotForm>({
    resolver: zodResolver(newSpotSchema)
  })

  const markerRef = useRef(null)

  const setDraggingCoordinates = useDraggingCoordinatesStore(
    state => state.setDraggingCoordinates
  )
  const lat = useDraggingCoordinatesStore(state => state.lat)
  const lng = useDraggingCoordinatesStore(state => state.lng)

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          //@ts-ignore
          const latlng = marker.getLatLng()
          setDraggingCoordinates({ lat: latlng.lat, lng: latlng.lng })
        }
      }
    }),
    []
  )

  return (
    <>
      <div className='flex gap-6 mt-10 justify-center place-items-center'>
        <div className='flex grow-0'>
          <div>
            <form
              onSubmit={handleSubmit(async data => {
                try {
                  setIsSubmitting(true)
                  await axios.post('/api/spots', data)
                  router.push('/')
                } catch (error) {
                  setIsSubmitting(false)
                  setError('An unexpected error occured.')
                }
              })}
            >
              <Card size='2' style={{ width: 500 }}>
                <Flex direction='column' gap='3'>
                  <Heading size='6'>Add Spot</Heading>
                  <TextField.Root>
                    <TextField.Slot>
                      <BsImageFill />
                    </TextField.Slot>
                    <TextField.Input
                      placeholder='Title'
                      {...register('title')}
                    />
                  </TextField.Root>
                  {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
                  <TextField.Root>
                    <TextField.Input placeholder='City' {...register('city')} />
                  </TextField.Root>
                  {<ErrorMessage>{errors.city?.message}</ErrorMessage>}
                  <TextField.Root>
                    <TextField.Input
                      placeholder='State'
                      {...register('state')}
                    />
                  </TextField.Root>
                  {<ErrorMessage>{errors.state?.message}</ErrorMessage>}
                  <TextField.Root>
                    <TextField.Input
                      type='float'
                      placeholder='Latitude'
                      {...register('latitude', {
                        setValueAs: v => parseFloat(v)
                      })}
                    />
                  </TextField.Root>
                  {<ErrorMessage>{errors.latitude?.message}</ErrorMessage>}
                  <TextField.Root>
                    <TextField.Input
                      type='float'
                      placeholder='Longitude'
                      {...register('longitude', {
                        setValueAs: v => parseFloat(v)
                      })}
                    />
                  </TextField.Root>
                  {<ErrorMessage>{errors.longitude?.message}</ErrorMessage>}
                  <Controller
                    name='description'
                    control={control}
                    render={({ field }) => (
                      <SimpleMDE placeholder='Description' {...field} />
                    )}
                  />

                  {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
                  <TextField.Root>
                    <TextField.Slot>
                      <BsCardImage />
                    </TextField.Slot>
                    <TextField.Input
                      placeholder='Image Link'
                      {...register('imageUrl')}
                    />
                  </TextField.Root>
                  {<ErrorMessage>{errors.imageUrl?.message}</ErrorMessage>}

                  <div className='hidden'>
                    <TextField.Root>
                      <TextField.Slot>
                        <BsCardImage />
                      </TextField.Slot>
                      <TextField.Input
                        placeholder='email'
                        defaultValue={session?.user?.email!}
                        {...register('email')}
                      />
                    </TextField.Root>
                  </div>

                  <Flex justify='between' className='mb-2'>
                    <Button
                      disabled={isSubmitting}
                      color='grass'
                      variant='solid'
                    >
                      Save Spot{isSubmitting && <Spinner />}
                    </Button>
                    <Button color='red' variant='solid'>
                      Cancel
                    </Button>
                  </Flex>
                </Flex>
                {error && (
                  <Callout.Root color='red'>
                    <Callout.Text>{error}</Callout.Text>
                  </Callout.Root>
                )}
              </Card>
            </form>
          </div>
        </div>
        <div id='map' style={{ height: '70vh', width: '50%' }}>
          <MapContainer
            center={[38.5, -121.7]}
            zoom={8}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%', borderRadius: '2rem' }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <DraggableMarker /> */}
            <Marker
              eventHandlers={eventHandlers}
              position={[lat, lng]}
              draggable={true}
              //@ts-ignore
              animate={true}
              ref={markerRef}
              icon={
                new Icon({
                  iconUrl: '/markerIcon2.png'
                  // iconSize: [25, 41],
                  // iconAnchor: [12, 41]
                })
              }
            >
              <Popup>
                <p>
                  latitude: {lat} <br /> longitude: {lng}
                </p>
                {lat} , {lng}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}
export default AddSpot
