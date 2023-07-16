'use client'
import axios from 'axios'
import DisplayData from 'components/DisplayData'
import Header from 'components/Header'
import Map from 'components/Map/Map'
import SearchBar from 'components/SearchBar'
import SideBar from 'components/SideBar'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
import { WeatherData } from 'types/weather'

export default function Home() {
  const MapWithNoSSR = dynamic(() => import('components/Map/Map'), {
    ssr: false
  })
  return (
    <>
      <div className='flex flex-col items-center mb-5 prose prose-xl prose-p:bold max-w-none '>
        <Header>Drone Map</Header>
        <p className=''>#1 Resource to find new places to fly</p>
      </div>
      <div className='w-1/3 mx-auto mb-5'>
        <SearchBar />
      </div>
      {}
      <div className='flex '>
        <div className='w-1/2 bg-neutral border-4 rounded-[2.3rem] mr-2 shadow-2xl'>
          <div className='float-right'>
            <Link href='/posts/create' className=''>
              <button className='btn btn-info rounded-3xl'>
                Add
                <br /> Spot
              </button>
            </Link>
          </div>
          <SideBar />
        </div>
        <div
          className='w-1/2 border-4 rounded-[2.3rem] shadow-2xl ml-2'
          id='map'
          style={{ height: '660px' }}
        >
          <MapWithNoSSR />
        </div>
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
