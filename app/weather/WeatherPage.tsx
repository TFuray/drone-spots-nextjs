'use client'

import axios from 'axios'
import HomeButton from 'components/HomeButton'

import { ChangeEvent, useState } from 'react'
import DisplayData from './DisplayData'

interface WeatherData {
  location: {
    name: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
    }
  }
}

const Weather = (): JSX.Element => {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

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
    <div>
      <h1>Weather App</h1>
      <input
        type='text'
        value={location}
        onChange={handleInputChange}
        placeholder='Enter location'
      />

      <button onClick={getWeatherData}>Get Weather</button>
      <div>
        <DisplayData weatherData={weatherData} />
      </div>
      <HomeButton />
    </div>
  )
}

export default Weather
