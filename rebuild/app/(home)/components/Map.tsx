import { useCoordinatesStore, useSearchStore } from '@/store/store'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
// import { useEffect, useState } from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents
} from 'react-leaflet'
import styles from './map.module.css'

const Map = () => {
  const latitude = useCoordinatesStore(state => state.latitude)
  const longitude = useCoordinatesStore(state => state.longitude)
  const isSearching = useSearchStore(state => state.isSearching)
  const setSearch = useSearchStore(state => state.setSearch)
  console.log(isSearching)
  const center = {
    lat: latitude,
    lng: longitude
  }
  const zoom = 5.4
  console.log(center)

  function SearchedCoords() {
    if (isSearching) {
      const map = useMap()
      map.flyTo([latitude, longitude], 10)
      setSearch(false)
      return null
    }
    return null
  }

  // const [center, setCenter] = useState({
  //   lat: latitude,
  //   lng: longitude
  // })
  return (
    <div
      className={styles.fullscreen}
      id='map'
      // style={{ height: '90vh', width: '100%' }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: 'full' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SearchedCoords />
      </MapContainer>
    </div>
  )
}
export default Map
