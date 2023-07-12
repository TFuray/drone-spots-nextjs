import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { zipcode } = req.body
  const API_KEY = process.env.MAPQUEST_API_KEY
  try {
    // Make a GET request to the geocoding API
    const response = await axios.get(
      `https://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${zipcode}`
    )

    // Extract the latitude and longitude from the API response
    const { lat, lng } = response.data.results[0].locations[0].latLng

    console.log(lat, lng)
    res.status(200).json({ latitude: lat, longitude: lng })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coordinates' })
  }
}
