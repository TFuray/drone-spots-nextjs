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
import { useWeatherStore } from '../store/store'
import Spot from './Spot'

const DisplayData = (): JSX.Element => {

  const data = useWeatherStore(state => state.weatherData)

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
    </>
  )
}
export default DisplayData
