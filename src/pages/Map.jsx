import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useDispatch, useSelector } from 'react-redux'
import L, { icon } from 'leaflet'
import 'leaflet-rotatedmarker'
import { clearRoute } from '../redux/slices/detailSlice'

const Map = ({ setDetailId }) => {

    const dispatch = useDispatch()

    const { flights } = useSelector((store) => store.flight)
    const { route } = useSelector((store) => store.detail)

    const planeIcon = icon({
        iconUrl: "/plane2.png",
        iconSize: [20, 20]
    })


    return (
        <MapContainer center={[38.922892, 35.411169]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
    )
}

export default Map