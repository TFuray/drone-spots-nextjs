'use client'
import {
  East,
  North,
  NorthEast,
  NorthWest,
  South,
  SouthEast,
  SouthWest,
  West
} from 'public/arrows/Arrows'
import { useState } from 'react'
import { useWeatherStore } from '../store/store'

const WeatherBar = (): JSX.Element => {
  const data = useWeatherStore(state => state.weatherData)



  const displayDirection = () => {
    if (!data) return <div>loading</div>
    if (data.current.wind_dir === 'N') {
      return <North />
    } else if (data.current.wind_dir === 'NNE') {
      return <NorthEast />
    } else if (data.current.wind_dir === 'NE') {
      return <East />
    } else if (data.current.wind_dir === 'ENE') {
      return <SouthEast />
    } else if (data.current.wind_dir === 'E') {
      return <South />
    } else if (data.current.wind_dir === 'ESE') {
      return <SouthEast />
    } else if (data.current.wind_dir === 'SE') {
      return <SouthEast />
    } else if (data.current.wind_dir === 'SSE') {
      return <SouthEast />
    } else if (data.current.wind_dir === 'S') {
      return <South />
    } else if (data.current.wind_dir === 'SSW') {
      return <SouthWest />
    } else if (data.current.wind_dir === 'SW') {
      return <SouthWest />
    } else if (data.current.wind_dir === 'WSW') {
      return <SouthWest />
    } else if (data.current.wind_dir === 'W') {
      return <West />
    } else if (data.current.wind_dir === 'WNW') {
      return <NorthWest />
    } else if (data.current.wind_dir === 'NW') {
      return <NorthWest />
    } else if (data.current.wind_dir === 'NNW') {
      return <NorthWest />
    }
  }

  return (
    <>
      <div className='flex gap-2'>
        <div className='self-center items-center font-bold'>
          {data?.location.name ? (
            <div>
              {data.location.name}, <br />
              {data.location.region}
            </div>
          ) : (
            'location'
          )}
        </div>
        <div className='self-center text-center font- '>
          <h2 className='underline text-neutral-content font-bold'>Wind</h2>
          <div className='flex justify-center'>{displayDirection()}</div>
          <h2 className='text-neutral-content'>
            {data?.current.wind_dir} @ {data?.current.wind_mph} mph
          </h2>
        </div>
      </div>
    </>
  )
}
export default WeatherBar
