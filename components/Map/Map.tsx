'use client'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent
} from 'react-leaflet'
import { useCoordinatesStore } from 'store/store'

const Map = () => {
  const latitude = useCoordinatesStore(state => state.latitude)
  const longitude = useCoordinatesStore(state => state.longitude)


  const RecenterAutomatically = ({ lat, lng }) => {
    const map = useMap()
    useEffect(() => {
      map.setView([lat, lng], 11)
    }, [lat, lng])
    return null
  }

  return (
    <MapContainer
      center={[38.5, -121.7]}
      zoom={1}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '2rem' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <RecenterAutomatically lat={latitude} lng={longitude} />
    </MapContainer>
  )
}

export default Map
