'use client'
import Head from 'next/head'
import Map, { Marker } from 'react-map-gl'
import MarkerGL from 'components/mapBox/MarkerGL'
import ControlPanel from 'components/mapBox/ControlPanel'

import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA'

export default function Home() {

  return (
    <div>
      <Head>
        <title>react-map-gl example</title>
      </Head>

      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14
        }}
        style={{ width: 800, height: 600 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <MarkerGL
        lng={-120.4}
        lat={38.9}
        />
        <Marker longitude={-122.4} latitude={37.8} color='red' />
        <ControlPanel/>
      </Map>
    </div>
  )
}
