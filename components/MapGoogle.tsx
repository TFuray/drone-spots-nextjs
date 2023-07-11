'use client'

import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import type { NextPage } from 'next'
import { useMemo } from 'react'
import SearchBar from './SearchBar'
import styles from './styles/Map.module.css'

const Map: NextPage = () => {
  const libraries = useMemo(() => ['places'], [])
  const mapCenter = useMemo(
    () => ({
      lat: 38.550146,
      lng: -99.951224
    }),
    []
  )

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true
    }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any
  })

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <div className='flex justify-center items-center rounded-2xl '>
      <div className=' w-1/3 h-[65vh] mr-5 bg-base-300 rounded-xl flex'>
        <div className='m-5 grow prose'>
          <h3>Pins Placeholder</h3>
          <ul>
            <li>list place holder</li>
            <li>list place holder</li>
            <li>list place holder</li>
        </ul>
        </div>
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={3.7}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{
          width: '65vh',
          height: '65vh',
          borderRadius: '1rem'
        }}
        onLoad={() => console.log('Map Component Loaded...')}
      />
    </div>
  )
}

export default Map
