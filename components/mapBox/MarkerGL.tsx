import { Marker } from "react-map-gl"
import Pin from "./Pin"

const MarkerGL = ({ lat, lng }) => {
  return (
    <Marker
      latitude={lat}
      longitude={lng}
      anchor='bottom'
    >
      <Pin size={25}/>
  </Marker>
  )
}
export default MarkerGL