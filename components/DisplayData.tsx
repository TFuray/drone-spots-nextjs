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
import Spot from './Spot'

const DisplayData = (): JSX.Element => {
  const [openTab, setOpenTab] = useState(2)

  const data = useWeatherStore(state => state.weatherData)
  console.log(data)
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
      <div>
        <div className='container mx-auto mt-12'>
          <div className='flex flex-col items-center justify-center max-w-xl'>
            <ul className='flex space-x-2'>
              <li>
                <button
                  className='drop-shadow-2xl text-3xl mb-3 bg-secondary px-7 py-2 rounded-md shadow-2xl '
                >
                  Spots
                </button>
              </li>
            </ul>
            <div>
              <Spot />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
export default DisplayData
