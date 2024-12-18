import React from 'react'
import c from '../../utils/nullCheck'
import t from '../../utils/formatDate'



const Time = ({ data }) => {
    return (
        <div className='time'>
            <div>
                <span>Planlanan</span>
                <span>{c(t(data.schedueld?.departure))}</span>
            </div>
            <div>
                <span>Planlanan</span>
                <span>{c(t(data.schedueld?.arrival))}</span>
            </div>
            <div>
                <span>Gerçekleşen</span>
                <span>{c(t(data.real?.departure))}</span>
            </div>
            <div>
                <span>Tahmini</span>
                <span>{c(t(data.estimated?.arrival))}</span>
            </div>
        </div>
    )
}

export default Time