import React from 'react'

const Modal = ({ id, close }) => {
    return (
        <div className='modal-outer'>
            <div className='modal-inner'>
                <div className='close-wrapper'>
                    <button onClick={close}>x</button>
                </div>
                <h1>{id}</h1>
            </div>
        </div>
    )
}

export default Modal