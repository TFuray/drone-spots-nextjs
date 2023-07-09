"use client"
import { useState } from 'react'
import SearchBar from 'components/SearchBar'
import Header from 'components/Header'
import Link from 'next/link'
import Map from 'components/Map'
import { WeatherData } from 'types/weather'
import DisplayData from 'components/DisplayData'
import axios from 'axios'

export default function Home() {


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
      <div className=''>
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
