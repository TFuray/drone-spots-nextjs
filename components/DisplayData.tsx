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

const DisplayData = (): JSX.Element => {
  const [openTab, setOpenTab] = useState(1)

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
                  onClick={() => setOpenTab(1)}
                  className={` ${
                    openTab === 1 ? 'btn btn-primary ' : 'btn'
                  } inline-block px-4 py-2 rounded shadow`}
                >
                  Weather Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenTab(2)}
                  className={` ${
                    openTab === 2 ? 'btn btn-primary ' : 'btn'
                  } inline-block px-4 py-2  rounded shadow`}
                >
                 Spots
                </button>
              </li>

            </ul>
            <div className=''>
              <div className={openTab === 1 ? 'block' : 'hidden'}>
                {data ? (
                  <div className='grid grid-cols-2 justify-center prose prose-h2:mt-4 text-center prose-img:m-auto'>
                    <div className='col-span-2 justify-self-center mt-2'>
                      <h1>
                        {data.location.name}, {data.location.region}
                      </h1>
                      <h4>Local Time:</h4>
                      <h4>{data.location.localtime}</h4>
                    </div>

                    <div className='ml-3 justify-self-center'>
                      <h2 className='text-xl underline'>Wind</h2>
                      {displayDirection()}
                      <h2 className='text-xl'>
                        {data.current.wind_dir} @ {data.current.wind_mph} mph
                      </h2>
                    </div>

                    <div className='ml-3 justify-self-center'>
                      <h2 className='text-xl underline'>Weather </h2>
                      <img
                        className='w-48'
                        src={data.current.condition.icon}
                        alt=''
                      />
                      <h2 className='text-xl'>
                        {data.current.temp_f}^F & {data.current.condition.text}
                      </h2>
                    </div>
                    <div className='col-span-2'>
                      <h2>
                        Cloud Coverage {data.current.cloud}% & Visibility{' '}
                        {data.current.vis_miles} miles
                      </h2>
                    </div>
                  </div>
                ) : (
                  <h2 className='prose-2xl mt-5'>
                    Enter Zip Code To See Weather
                  </h2>
                )}
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'}>
               <h2 className='prose-2xl mt-3'>Coming Soon</h2>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DisplayData
