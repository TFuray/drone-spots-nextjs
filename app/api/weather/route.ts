

// export async function getServerSideProps(search: string) {
//   const API_KEY= process.env.API_KEY
//   const res = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=no`
//   )
//   const data = await res.json()
//   console.log(data)
//   return data
// }


// export default async function handler(req, res) {
//   const API_KEY= process.env.API_KEY
//   const search = req.query.search
//   try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=no`
//     )
//     const data = await response.json()
//     console.log(data)
//     return data
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }



// pages/api/weather.js

// pages/api/weather.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface WeatherData {
  // Define the structure of the weather data here
  // This is just a sample, you can modify it based on the response from the WeatherAPI
  temperature: number;
  humidity: number;
  description: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { location } = req.query;
  const apiKey = process.env.API_KEY // Replace with your WeatherAPI API key

  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const weatherData: WeatherData = response.data;
    res.status(200).json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};
