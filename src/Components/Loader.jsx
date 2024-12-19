import React from 'react'

const Loader = () => {
    return (
        <div className='loader-wrapper'>
            <div className="loader">
                <span></span>
                <div id="dot-1" class="dot"></div>
                <div id="dot-2" class="dot"></div>
                <div id="dot-3" class="dot"></div>
                <div id="dot-4" class="dot"></div>
                <div id="dot-5" class="dot"></div>
            </div>
        </div>
    )
}

export default Loader