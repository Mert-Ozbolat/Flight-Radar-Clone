import React from 'react'

const Airport = ({ data }) => {
    return (
        <div className='airport'>
            <div>
                <h3>{data.origin.code.iata}</h3>
                <h6>{data.origin.position.region.city}</h6>
                <span>
                    {data.origin.timezone.abbr} ({data.origin.timezone.name})
                </span>
            </div>

            <div className='icon'>
                <img src="/plane2.png" alt="" />
            </div>

            <div>
                <h3>{data.destination.code.iata}</h3>
                <h6>{data.destination.position.region.city}</h6>
                <span>
                    {data.destination.timezone.abbr} ({data.origin.timezone.name})
                </span>
            </div>
        </div>
    )
}

export default Airport