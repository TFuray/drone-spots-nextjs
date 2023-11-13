'use client'

import SearchBar from '@/components/ui/SearchBar'
import Weather from '@/components/weatherDisplay/Weather'
import dynamic from 'next/dynamic'
import SpotsList from './components/SpotsList'

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
        <div>
          <Weather />
          <div className='w-1/3'>
            <SpotsList />
          </div>
        </div>
      </div>
      <div>
      </div>

      <MapWithNoSSR />
    </div>
  )
}
