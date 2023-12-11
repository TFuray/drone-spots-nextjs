import { Card } from '@radix-ui/themes'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { useEffect, useMemo, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import InputForm from './InputForm'
import { useDraggingCoordinatesStore } from '@/store/store'
import DraggableMarker from './TestDragMarker'
import { Icon } from 'leaflet'


const AddMap = () => {
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
          setDraggingCoordinates({ lat: latlng.lat, lng: latlng.lng })
        }
      }
    }),
    []
  )

  return (
    <>
      <div className='flex gap-6 mt-10 justify-center place-items-center'>
        <div className='flex grow-0'>
          <InputForm />
        </div>
        <div id='map' style={{ height: '70vh', width: '50%' }}>
          <MapContainer
            center={[38.5, -121.7]}
            zoom={8}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%', borderRadius: '2rem' }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <DraggableMarker /> */}
            <Marker
              eventHandlers={eventHandlers}
              position={[lat, lng]}
              draggable={true}
              animate={true}
              ref={markerRef}
              icon={
                new Icon({
                  iconUrl: '/markerIcon2.png'
                  // iconSize: [25, 41],
                  // iconAnchor: [12, 41]
                })
              }
            >
              <Popup>
                <p>
                  latitude: {lat} <br /> longitude: {lng}
                </p>
                {lat} , {lng}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}
export default AddMap
