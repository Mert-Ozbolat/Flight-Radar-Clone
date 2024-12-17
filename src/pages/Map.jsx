import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux'
import L, { icon } from 'leaflet'
import 'leaflet-rotatedmarker'

const Map = ({ setDetailId }) => {
    const { flights } = useSelector((store) => store.flight)

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
                            </div>
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}

export default Map