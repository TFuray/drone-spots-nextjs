'use client'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useCoordinatesStore, useWeatherStore } from 'store/store'
import { Coordinates, WeatherData } from 'types/weather'

const SearchBar = () => {
  const [location, setLocation] = useState('')
  // const [coordinates, setCoordinates] = useState<Coordinates | null>(null)

  // const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const setWeatherData = useWeatherStore(state => state.setWeatherData)
  const setCoordinates = useCoordinatesStore(state => state.setCoordinates)
  const latitude = useCoordinatesStore(state => state.latitude)
  const longitude = useCoordinatesStore(state => state.longitude)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const getWeatherData = async () => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=2b97f312100a4bd099b180935230707 &q=${location}`
      )
      setWeatherData(response.data)
      setCoordinates({
        latitude: response.data.location.lat,
        longitude: response.data.location.lon
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = () => {
    getWeatherData()
  }

  return (
    <div className='grid grid-cols-3 gap-2 search-bar '>
      <input
        className='input input-bordered border-2 border-secondary w-full col-span-2 '
        type='search'
        placeholder='enter zipcode'
        value={location}
        onChange={handleInputChange}
      />
      <div className='grid'>
        <button className='btn grid btn-outline border-secondary border-2' onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
