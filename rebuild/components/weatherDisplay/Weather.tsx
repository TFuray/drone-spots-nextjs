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
} from '@/public/arrows/Arrows'
import { useWeatherStore } from '@/store/store'
import { Badge } from '@radix-ui/themes'

const Weather = (): JSX.Element => {
  const data = useWeatherStore(state => state.weatherData)

  const displayDirection = () => {
    if (!data)
      return <div className='text-sm text-center'>Enter location...</div>
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
      {data && (
        <div className='flex gap-6 mt-6'>
          <div className='p-1 text-center font-bold'>
            <Badge size='2' radius='full' variant='surface' color='blue'>
              <span className='font-bold'>
                {data.location.name}, <br />
                {data.location.region}
              </span>
            </Badge>
          </div>

          <div>
            <Badge size='2' radius='full' variant='surface' color='blue'>
              <div className='p-1 text-sm text-center font-bold'>
                <div>
                  {data?.current.temp_f}&deg;F <br />
                  {data?.current.condition.text}
                </div>
              </div>
            </Badge>
          </div>

          <div>
            <Badge size='2' radius='full' variant='surface' color='blue'>
              <div className=''>
                <div className='flex justify-center'>{displayDirection()}</div>
                <div className='text-sm text-center font-bold'>
                  <div>{data?.current.wind_mph} mph</div>
                </div>
              </div>
            </Badge>
          </div>

          <div>
            <Badge size='2' radius='full' variant='surface' color='blue'>
              <div className='p-1 font-bold'>
                Clouds: {data?.current.cloud}% <br /> Visibility:
                {data?.current.vis_miles} mi
              </div>
            </Badge>
          </div>
        </div>
        // <div className='flex justify-between mb-4'>
        //     <div className='self-center items-center font-bold'>
        //       <div>
        //         {data.location.name}, <br />
        //         {data.location.region}
        //       </div>
        //     </div>

        //   <div className='flex flex-col justify-between'>
        //     <h2 className='underline text-center font-bold'>Wind</h2>
        //     <div className='flex justify-center'>{displayDirection()}</div>
        //     <div className='text-sm text-center font-bold'>
        //       <div>
        //         {data?.current.wind_dir} <br /> {data?.current.wind_mph} mph
        //       </div>
        //     </div>
        //   </div>

        //   <div className='self-center text-center'>
        //     <h2 className='underline font-bold'>Weather </h2>
        //     <img
        //       className='m-auto scale-150'
        //       src={data?.current.condition.icon}
        //       alt=''
        //     />
        //     <div className='text-sm text-center font-bold'>
        //       <div>
        //         {data?.current.temp_f}&deg; <br />{' '}
        //         {data?.current.condition.text}
        //       </div>
        //     </div>
        //   </div>

        //   <div className='self-center items-center font-bold text-sm'>
        //     <div>
        //       Clouds: {data?.current.cloud}% <br /> <br /> Visibility: <br />
        //       {data?.current.vis_miles} miles
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  )
}
export default Weather
