import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useDraggingCoordinatesStore } from 'store/store'

const MapDragMarker: React.FC = () => {
  const markerRef = useRef(null)

  const setDraggingCoordinates = useDraggingCoordinatesStore(
    state => state.setDraggingCoordinates
  )
  const lat = useDraggingCoordinatesStore(state => state.lat)
  const lng = useDraggingCoordinatesStore(state => state.lng)

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const latlng = marker.getLatLng()
          setDraggingCoordinates({lat: latlng.lat, lng: latlng.lng})
        }
      }
    }),
    []
  )

  useEffect(() => {
    console.log(markerRef.current)
  }, [])

  return (
    <MapContainer
      center={[38.5, -121.7]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', borderRadius: '2rem' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        eventHandlers={eventHandlers}
        position={[38.5, -121.7]}
        draggable={true}
        animate={true}
        ref={markerRef}
      >
        <Popup>
          {lat} {lng}Drag Marker to Spot You Want To Save
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapDragMarker
