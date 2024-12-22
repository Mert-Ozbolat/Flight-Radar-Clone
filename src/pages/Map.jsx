import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useDispatch, useSelector } from 'react-redux'
import L, { icon } from 'leaflet'
import 'leaflet-rotatedmarker'
import { clearRoute } from '../redux/slices/detailSlice'
import { getFlights } from '../redux/actions'

const Map = ({ setDetailId }) => {

    const dispatch = useDispatch()

    const { flights } = useSelector((store) => store.flight)
    const { route } = useSelector((store) => store.detail)

    const planeIcon = icon({
        iconUrl: "/plane2.png",
        iconSize: [20, 20]
    })

    useEffect(() => {
        const id = setInterval(() => {
            dispatch(getFlights());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className='map'>
            <MapContainer center={[38.922892, 35.411169]} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, USGS, NOAA'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                {
                    flights.map((flight) => (
                        <Marker
                            key={flight.id}
                            position={[flight.lat, flight.lng]}
                            icon={planeIcon}
                            rotationAngle={flight.deg - 90}
                        >
                            <Popup>
                                <div className='popup'>
                                    <span>Kod: {flight.code}</span>
                                    <button onClick={() => setDetailId(flight.id)}>Detay</button>

                                    {
                                        route.length > 1 && (
                                            <button onClick={() => dispatch(clearRoute())}>Rotayı Temizle</button>
                                        )
                                    }

                                </div>
                            </Popup>
                        </Marker>
                    ))
                }
                {route && <Polyline positions={route} />}
            </MapContainer>
        </div>
    )
}

export default Map