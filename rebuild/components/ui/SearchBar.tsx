import { useCoordinatesStore, useWeatherStore, useSearchStore } from '@/store/store'
import { Location } from '@/types/lanLng'
import { ReverseGeo } from '@/types/reverseGeo'
import { Coordinates, WeatherData, Search } from '@/types/weather'
import axios from 'axios'
import {BiCurrentLocation} from 'react-icons/bi'
import { ChangeEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import ErrorMessage from './ErrorMessage'

// type SearchForm = z.

const SearchBar = () => {
  const [location, setLocation] = useState('')
  const setWeatherData = useWeatherStore(state => state.setWeatherData)
  const setCoordinates = useCoordinatesStore(state => state.setCoordinates)
  const setSearch = useSearchStore(state => state.setSearch)

  const { register, handleSubmit } = useForm()

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setLocation(e.target.value)
  // }
  const getWeatherData = async (input: string) => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=2b97f312100a4bd099b180935230707 &q=${input}`
      )
      console.log(response.data)
      setWeatherData(response.data)
      setSearch(true)
      setCoordinates({
        latitude: response.data.location.lat,
        longitude: response.data.location.lon
      })
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = (data: any) => {
    if (data.search === '') {
      return <ErrorMessage>Please Enter a location</ErrorMessage>
    } else {
      getWeatherData(data.search)
    }
  }

  const coordsToCity = async (lat: number, lon: number) => {
    try {
      const response = await axios.get<ReverseGeo>(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`
      )
      setLocation(response.data.name)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFindMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      console.log('Geolocation not supported')
    }
    function success(position: GeolocationPosition) {
      const userLat: number = position.coords.latitude
      const userLong: number = position.coords.longitude
      console.log(userLat, userLong)
      setCoordinates({
        latitude: userLat,
        longitude: userLong
      })
      setLocation(`${userLat}, ${userLong}`)

      getWeatherData(`${userLat},${userLong}`)
      coordsToCity(userLat, userLong)
    }
    function error(error: GeolocationPositionError) {
      console.log(`Unable to retrieve your location ${error}`)
    }
  }

  return (
    <div className=''>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-[480px] w-full px-4'
      >
        <div className='relative'>
          <input
            type='search'
            className='inline w-full rounded-2xl border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
            placeholder='Enter Location'
            // name='search'
            {...register('search')}
          />
          <div className='flex gap-3 mt-1 justify-around'>
          <button
            type='submit'
            className='shrink mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
          >
            Search
          </button>
            <button
              onClick={handleFindMyLocation}
            className=' mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
          >
          <BiCurrentLocation size='20'/>
          </button>
</div>
          {/* <button type='submit'>
            <svg
              className='text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              x='0px'
              y='0px'
              viewBox='0 0 56.966 56.966'
              xmlSpace='preserve'
            >
              <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z'></path>
            </svg>
          </button> */}
        </div>
      </form>
    </div>
  )
}
export default SearchBar
