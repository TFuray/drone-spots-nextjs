import useFetch from 'http-react'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

const Markers = () => {
  interface SpotType {
    map(
      arg0: (spot: any) => import('react').JSX.Element
    ): import('react').ReactNode
    id: number
    title: string
    city: string
    state: string
    latitude: number
    longitude: number
    description: string
    imageUrl: string
    default: [any]
  }

  const { data, error } = useFetch<SpotType>('/api/spots', {
    //@ts-ignore
    default: []
  })

  return (
    <>
      {data.map(spot => (
        <Marker
          key={spot.id}
          position={[spot.latitude, spot.longitude]}
          icon={
            new Icon({
              iconUrl: '/markerIcon2.png'
              // iconSize: [25, 41],
              // iconAnchor: [12, 41]
            })
          }
        ></Marker>
      ))}
    </>
  )
}
export default Markers
