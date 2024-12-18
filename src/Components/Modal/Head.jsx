import React from 'react'

const Head = ({ info, close }) => {
    return (
        <div className='close-wrapper'>
            <div>
                <h3 title='Call Sign'>{info.identification.callsign}</h3>
                <span title='Flight Number'>{info.identification.number.default}</span>
                <span title='Aircraft IATA/ICAO type code'>{info.aircraft.model.code}</span>
            </div>
            <button onClick={close}>x</button>
        </div>
    )
}

export default Head