'use client'

import SearchBar from '@/components/ui/SearchBar'
import dynamic from 'next/dynamic'
import Weather from '@/components/weatherDisplay/Weather'

export default function Home() {
  const MapWithNoSSR = dynamic(() => import('./components/Map'), {
    ssr: false
  })

  return (
    <div>
      <div className='flex'>
      <div className='m-4 p-4 w-1/5'>
        <SearchBar />
      </div>
      <Weather />
      </div>
      <MapWithNoSSR />
    </div>
  )
}
