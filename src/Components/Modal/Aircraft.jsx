import React from 'react'
import { IoMdAirplane } from "react-icons/io";
import c from "../../utils/nullCheck"

const Aircraft = ({ data }) => {
    return (
        <div className='aircraft'>
            <div className='icon'><IoMdAirplane /></div>
            <div>
                <p>
                    <span className='title'>Uçuş Tipi</span>
                    <span>{c(data?.model?.text)}</span>
                </p>

                <div>
                    <p>
                        <span className='title'>Kuyruk Kodu</span>
                        <span>{c(data?.model?.registration)}</span>
                    </p>

                    <p>
                        <span className='title'>Ülke Id</span>
                        <span>{c(data?.countryId)}</span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Aircraft