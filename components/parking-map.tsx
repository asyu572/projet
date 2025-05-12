'use client'

import { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const center = {
  lat: 51.5074,
  lng: -0.1278
}

const ParkingMap = () => {
  const [map, setMap] = useState(null)

  const onLoad = (map: any) => {
    setMap(map)
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={13}
        onLoad={onLoad}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default ParkingMap