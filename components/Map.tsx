import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'


const Map = () => {
const markerRef = useRef(null)
const eventHandlers = useMemo(
  () => ({
    dragend() {
      const marker = markerRef.current
      if (marker != null) {
        // setPosition(marker.getLatLng())
        console.log(marker.getLatLng())
      }
    }
  }),
  []
)
useEffect(() => {
  console.log(markerRef.current)
}, [markerRef.current])

  return (
    <MapContainer
      center={[39.5, -100.7]}
      zoom={4.5}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        eventHandlers={eventHandlers}
        position={[39.5, -100.7]}
        draggable={true}
        animate={true}
        ref={markerRef}
      >
        <Popup>Drag Marker to Spot You Want To Save</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
