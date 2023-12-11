'use client'

import SearchBar from '@/components/ui/SearchBar'
import Weather from '@/components/weatherDisplay/Weather'
import { useWeatherStore } from '@/store/store'
import dynamic from 'next/dynamic'
import SpotsList from './components/SpotsList'

export default function Home() {
  const data = useWeatherStore(state => state.weatherData)

  const MapWithNoSSR = dynamic(() => import('./components/Map'), {
    ssr: false
  })

  return (
    <>
      <div className='flex'>
        <div className='m-4 p-4 w-1/4'>
          <SearchBar />
        </div>
        <div>
          <Weather />
          <div className='w-1/3'></div>
        </div>
      </div>

      <div className='w-1/4 h-3/5 m-4'>
        {data && (<SpotsList />)}
      </div>

      <MapWithNoSSR />
    </>
  )
}
