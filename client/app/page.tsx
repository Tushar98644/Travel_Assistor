'use client'

import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Room } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home_page = () => {
  const [Pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 0,
    longitude: 0,
    zoom: 10
  });

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setViewport((prevViewport) => ({
  //         ...prevViewport,
  //         latitude,
  //         longitude
  //       }));
  //     },
  //     (error) => {
  //       console.error('Error getting user location:', error);
  //     }
  //   );
  // }, []);

  useEffect(() => {
    const GetPins = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/pin')
        setPins(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    GetPins()
  }, []);

  return (
    <div>
      <Map projection={'globe'} mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        mapStyle='mapbox://styles/tushar-evil/clhvuyagf005o01qsadhsbixd'
        style={{ width: "100vw", height: "100vh" }}>
        {Pins.map((p) => (
          <div>
            <Marker
              latitude={p.lat}
              longitude={p.long}>
              <Room style={{ fontSize: "40px", color: "red" }} />
            </Marker>
            <Popup
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              closeButton={true}
              closeOnClick={false}
              anchor="left">
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
        ))}
      </Map>
    </div>
  );
}

export default Home_page;