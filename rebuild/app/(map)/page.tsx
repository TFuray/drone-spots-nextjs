'use client'

import { Button } from '@radix-ui/themes'
import Map from './components/Map'
import dynamic from 'next/dynamic'

export default function Home() {

  return (

    <div>
      <Map />
    </div>
  )
}
