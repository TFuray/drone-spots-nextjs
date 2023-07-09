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
      lat: 38.433857385536584,
      lng: -122.7162342207697
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
        <div className='flex m-5 grow'>
          <SearchBar />
        </div>
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
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
