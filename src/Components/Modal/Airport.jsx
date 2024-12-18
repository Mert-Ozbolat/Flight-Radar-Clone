import React from 'react'
import c from '../../utils/nullCheck'




const Airport = ({ data }) => {
    return (
        <div className='airport'>
            <div>
                <h3>{c(data.origin?.code?.iata)}</h3>
                <h6>{c(data.origin?.position?.region.city)}</h6>
                <span>
                    {c(data.origin?.timezone?.abbr)} ({c(data.origin?.timezone?.name)})
                </span>
            </div>

            <div className='icon'>
                <img src="/plane2.png" alt="" />
            </div>

            <div>
                <h3>{c(data.destination?.code?.iata)}</h3>
                <h6>{c(data.destination?.position?.region.city)}</h6>
                <span>
                    {c(data.destination?.timezone?.abbr)} ({c(data.origin?.timezone?.name)})
                </span>
            </div>
        </div>
    )
}

export default Airport