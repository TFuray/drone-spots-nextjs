import { useDraggingCoordinatesStore } from '@/store/store'
import { Card } from '@radix-ui/themes'
import { Icon } from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import InputForm from './InputForm'

const center = {
  lat: 51.505,
  lng: -0.09
}
function DraggableMarker() {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          // @ts-ignore
          setPosition(marker.getLatLng())
        }
      }
    }),
    []
  )
  const toggleDraggable = useCallback(() => {
    setDraggable(d => !d)
  }, [])

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={
        new Icon({
          iconUrl: '/markerIcon2.png'
          // iconSize: [25, 41],
          // iconAnchor: [12, 41]
        })
      }
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  )
}

export default DraggableMarker
