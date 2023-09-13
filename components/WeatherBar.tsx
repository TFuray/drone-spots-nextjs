'use client'
import { divIcon } from 'leaflet'
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
    if (!data) return <div className='text-sm text-center'>loading...</div>
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
      <div className='flex gap-8'>
        <div className='self-center items-center font-bold'>
          {data?.location.name ? (
            <div>
              {data.location.name}, <br />
              {data.location.region}
            </div>
          ) : (
            <>
              <div className='underline text-center font-bold'>location</div>
              <div className='font-normal text-sm text-center'>loading...</div>
            </>
          )}
        </div>

        <div className='flex flex-col justify-between'>
          <h2 className='underline text-center font-bold'>Wind</h2>
          <div className='flex justify-center'>{displayDirection()}</div>
          <div className='text-sm text-center font-bold'>
            {data?.current.wind_dir ? (
              <div>
                {data?.current.wind_dir} <br /> {data?.current.wind_mph} mph
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className='self-center text-center'>
          <h2 className='underline font-bold'>Weather </h2>
          <img
            className='m-auto scale-150'
            src={data?.current.condition.icon}
            alt=''
          />
          <div className='text-sm text-center font-bold'>
            {data?.current.temp_f ? (
              <div>
                {data?.current.temp_f}&deg; <br />{' '}
                {data?.current.condition.text}
              </div>
            ) : (
              <div className='font-normal'>loading...</div>
            )}
          </div>
        </div>
        {data ? (
          <div className='self-center items-center font-bold text-sm'>
            <div>
              Clouds: {data?.current.cloud}% <br /> <br /> Visibility: <br />
              {data?.current.vis_miles} miles
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}
export default WeatherBar
