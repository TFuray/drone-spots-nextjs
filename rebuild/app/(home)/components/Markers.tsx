import CardModel from '@/components/ui/CardModel'
import useFetch from 'http-react'
import { Icon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'

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

  const { data, loadingFirst, error } = useFetch<SpotType>('/api/spots', {
    //@ts-ignore
    default: []
  })

  if (loadingFirst)
    return <p className='text-2xl font-semibold py-4'>Loading Posts...</p>

  if (error)
    return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

  return (
    <>
      {data.map(spot => (
        <Marker
          key={spot.id}
          position={[spot.latitude, spot.longitude]}
          icon={
            new Icon({
              iconUrl: '/markerIcon.png',
              iconSize: [42, 42]
              // iconAnchor: [12, 41]
            })
          }
        >
          <Popup>
            <div className='flex flex-col gap-1'>
              <h1 className='text-lg text-center font-bold'>
                <span className='font-bold text-[.9rem] tabular-nums align-super '></span>
                {spot.title}{' '}
              </h1>
              <div className='flex m-2'>
                <div className='badge badge-accent badge-xs font-bold'>{spot.city}</div>
                <div className='badge badge-accent badge-xs font-bold'>{spot.state}</div>
              </div>
              <button
                className='btn btn-sm '
                onClick={() => {
                  const modal = document.getElementById(
                    `my_modal_${spot.id}`
                  ) as HTMLDialogElement | null
                  if (modal) {
                    modal.showModal()
                  }
                }}
              >
                See More
              </button>
            </div>
          </Popup>
          <dialog id={`my_modal_${spot.id}`}>
            <>
              <CardModel spot={spot} />
              <form method='dialog' className='modal-backdrop'>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Close</button>
                </div>
              </form>
            </>
          </dialog>
        </Marker>
      ))}
    </>
  )
}
export default Markers
