
import React from 'react'
import { mobile_wrapper, warning1, warning2 } from './MobileStyles'

function Mobile() {
    return (
        <div className={mobile_wrapper}>

             <span className={warning1}>Oops, Unavailable</span>
            <span className={warning2}>Not available on mobile devices, please visit the link with a pc.</span>
            
        </div>
    )
}

export default Mobile
