import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { WeatherData } from 'types/weather'

export default async function getWeather(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { location } = req.query
  const API_KEY = process.env.API_KEY

  try {
    const response = await axios.get<WeatherData>(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    )
    console.log(response.data)
    res.status(200).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}
