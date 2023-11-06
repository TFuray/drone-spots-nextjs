'use client'

import dynamic from 'next/dynamic'

// import AddMap from "./components/AddMap"

const AddSpot = () => {
    const MapWithNoSSR = dynamic(() => import('./components/AddMap'), {
      ssr: false
    })
  return (
    <div>
      <MapWithNoSSR/>
    </div>
  )
}
export default AddSpot