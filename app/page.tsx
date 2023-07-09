"use client"
import { useState } from 'react'
import Header from 'components/Header'
import Link from 'next/link'
import Map from 'components/Map'
import { WeatherData } from 'types/weather'
import axios from 'axios'

export default function Home() {

  const getWeatherData = async (location) => {
    try {
      const response = await axios.get<WeatherData>(
        `/api/getWeatherData?location=${location}`
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='flex flex-col items-center mb-5 prose prose-xl prose-p:underline max-w-none '>
        <Header>Fly Now</Header>
        <p className=''>#1 Resource to find new places to fly</p>
      </div>
      <div>
        <Map
        />
      </div>
    </>
  )
}

{
  /* </div>
      <Link href='/posts' className='btn btn-ghost underline'>
        Find Spots
      </Link>
      <Link href='/search' className='btn btn-ghost underline'>
        Search By Location
      </Link> */
}
