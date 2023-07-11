'use client'
import axios from 'axios'
import DisplayData from 'components/DisplayData'
import Header from 'components/Header'
import Map from 'components/Map'
import SearchBar from 'components/SearchBar'
import Link from 'next/link'
import { useState } from 'react'
import { WeatherData } from 'types/weather'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'


export default function Home() {
  const MapWithNoSSR = dynamic(() => import('components/Map'), {
    ssr: false
  })
  return (
    <>
      <div className='flex flex-col items-center mb-5 prose prose-xl prose-p:underline max-w-none '>
        <Header>Fly Now</Header>
        <p className=''>#1 Resource to find new places to fly</p>
      </div>
      <div className='w-1/3 mx-auto mb-5'>
        <SearchBar />
        <DisplayData />
      </div>
      <div id='map' style={{height: '660px'}}>
        <MapWithNoSSR />
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
