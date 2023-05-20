'use client'

import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Room } from '@material-ui/icons'
import { useEffect, useState } from 'react'

const Home_page = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 0,
    longitude: 0,
    zoom: 10
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setViewport((prevViewport) => ({
          ...prevViewport,
          latitude,
          longitude
        }));
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);
  return (
    <div>
      <Map projection={'globe'} mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        mapStyle='mapbox://styles/tushar-evil/clhvuyagf005o01qsadhsbixd'
        style={{ width: "100vw", height: "100vh" }}>
        <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}>
          <Room style={{ fontSize: "40px", color: "red" }} />
        </Marker>
        <Popup
          latitude={viewport.latitude}
          longitude={viewport.longitude}  
          closeButton={true}
          closeOnClick={false}
          anchor="left">
            <div></div>
        </Popup>
      </Map>
    </div>
  );
}

export default Home_page;