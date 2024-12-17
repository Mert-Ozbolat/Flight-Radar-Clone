import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux'
import L from 'leaflet'

const Map = () => {
    const { flights } = useSelector((store) => store.flight)

    return (
        <MapContainer center={[38.922892, 35.411169]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                flights.map((flight) => {

                    const icon = L.divIcon({
                        html: `
                            <div>
                            <img src="/plane2.png" alt="plane" style="width:40px; height:40px;" />
                            </div>
                        `,
                        className: '',
                        iconSize: [40, 40]
                    })

                    return (
                        <Marker
                            key={flight.id}
                            position={[flight.lat, flight.lng]}
                            icon={icon}
                        >
                            <Popup>
                                <div className='popup'>
                                    <span>Kod: {flight.code}</span>
                                    <button>Detay</button>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    )
}

export default Map