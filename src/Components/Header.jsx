import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'

const Header = () => {
    return (
        <header className='bg-white p-2 d-flex justify-content-between align-items-center shadow'>
            <Link to="/" className='d-flex gap-2 align-items-center'>
                <img src='/logo.png' width={60} />
                <h4>Uçuş Radarı</h4>
            </Link>

            <Buttons />

            <h6 className='text-black fw-bold info'>300 Uçuş Bulundu</h6>
        </header>
    )
}

export default Header