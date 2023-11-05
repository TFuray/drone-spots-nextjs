import { Card } from '@radix-ui/themes'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import InputForm from './InputForm'
import { useMemo } from 'react'

const AddMap = () => {
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const latlng = marker.getLatLng()
          // setDraggingCoordinates({lat: latlng.lat, lng: latlng.lng})
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
            center={[lat, lng]}
            zoom={8}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%', borderRadius: '2rem' }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              eventHandlers={eventHandlers}
              position={[lat, lng]}
              draggable={true}
              animate={true}
              ref={markerRef}
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
