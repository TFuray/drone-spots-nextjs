'use client'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useWeatherStore } from 'store/store'
import { WeatherData } from 'types/weather'

const SearchBar = () => {
  const [location, setLocation] = useState('')
  // const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const setWeatherData = useWeatherStore((state) => state.setWeatherData)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const getWeatherData = async () => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=2b97f312100a4bd099b180935230707 &q=${location}`
      )
      console.log(response.data)
      setWeatherData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='search-bar grow flex'>
        <input
          className='input input-bordered input-sm w-full grow '
          type='text'
          placeholder='enter zipcode'
          value={location}
          onChange={handleInputChange}
        />
        <div className='flex ml-2 justify-end'>
          <button className='btn btn-sm btn-outline' onClick={getWeatherData}>
            Search
          </button>
        </div>
    </div>
  )
}

export default SearchBar