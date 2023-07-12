'use client'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useWeatherStore, useCoordinatesStore } from 'store/store'
import { WeatherData, Coordinates } from 'types/weather'


const SearchBar = () => {
  const [location, setLocation] = useState('')
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)

  // const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const setWeatherData = useWeatherStore(state => state.setWeatherData)
  const setCoordinatesStore = useCoordinatesStore(state => state.setCoordinates)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const setCoordinatesData = () => {
    setCoordinatesStore({
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      setCoordinates: function (data: Coordinates): void {
        throw new Error('Function not implemented.')
      }
    })
  }


  const getWeatherData = async () => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=2b97f312100a4bd099b180935230707 &q=${location}`
      )
      console.log(response.data)
      setWeatherData(response.data)
      setCoordinates({
        latitude: response.data.location.lat,
        longitude: response.data.location.lon
      })
      console.log(coordinates)
      setCoordinatesData()
    } catch (error) {
      console.error(error)
    }
  }

  // const getLatLong = async () => {
  //   try {
  //     const response = await axios.get<Coordinates>(
  //       `https://www.mapquestapi.com/geocoding/v1/address?key=VHXjnhoECljJuSMcuD1422ZCeRXXjH07&location=${location}`
  //     )
  //     setLanLng(response.data)
  //     console.log(response.data)
  //     console.log()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const handleClick = () => {
    getWeatherData()
    // getLatLong()
  }

  return (
    <div className='search-bar grow fle'>
      <input
        className='input input-bordered border-2 border-white w-full grow '
        type='text'
        placeholder='enter zipcode'
        value={location}
        onChange={handleInputChange}
      />
      <div className='flex ml-2 justify-center'>
        <button
          className='btn mt-2 btn-outline border-2'
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
