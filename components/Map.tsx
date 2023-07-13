'use client'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useCoordinatesStore } from 'store/store'

const Map = () => {
  const markerRef = useRef(null)

  const latitude = useCoordinatesStore(state => state.latitude)
  const longitude = useCoordinatesStore(state => state.longitude)

  console.log(latitude)

  // const eventHandlers = useMemo(
  //   () => ({
  //     dragend() {
  //       const marker = markerRef.current
  //       if (marker != null) {
  //         // setPosition(marker.getLatLng())
  //         console.log(marker.getLatLng())
  //       }
  //     }
  //   }),
  //   []
  // )
  // useEffect(() => {
  //   console.log(markerRef.current)
  // }, [markerRef.current])

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={11}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', borderRadius: '2rem' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        panTo={[latitude, longitude]}
      />
      {/* <Marker
        eventHandlers={eventHandlers}
        position={[38.5, -121.7]}
        draggable={true}
        animate={true}
        ref={markerRef}
      >
        <Popup>Drag Marker to Spot You Want To Save</Popup>
      </Marker> */}
    </MapContainer>
  )
}

export default Map
