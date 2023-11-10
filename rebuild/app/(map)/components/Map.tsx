import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import styles from './map.module.css'

const Map = () => {
  return (
    <div className={styles.fullscreen} id='map'
      // style={{ height: '90vh', width: '100%' }}
    >


    <MapContainer
      center={[38.5, -121.7]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100%', width: 'full' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3R0ZXI3MDciLCJhIjoiY2xqeHh0M2hqMDRnazNrcWU5MzVqMml6YSJ9.T3txdvzcprGNOEKojg68kA`}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
</div>
  )
}
export default Map
