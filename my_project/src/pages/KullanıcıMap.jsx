import React from 'react'
import './YoneticiMap.jsx'
import { GoogleMap, useJsApiLoader,MarkerF } from '@react-google-maps/api';
const containerStyle = {
  width: '1400px',
  height: '650px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const points=[
  {
    lat: -3.745,
    lng: -38.522
  },
  {
    lat: -3.743,
    lng: -38.523
  },
  {
    lat: -3.744,
    lng: -38.524
  },
  {
    lat: -3.746,
    lng: -38.525
  }
]

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCR6ceXNsV4SkUGsP1JW4CDDy2VS3MJXso"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl:false,
          mapTypeControl:false
        }}
        
      >
    
        {
          points.map((point,i)=>{
            <MarkerF position={point}> </MarkerF>
          })
        }
       
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      
      </GoogleMap>
      
  ) : <></>
}

export default React.memo(MyComponent)
