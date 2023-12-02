import React from 'react'
import { image_bars, location_bar_text, location_bars, location_bars_wrapper, location_left_icon, location_wrapper, round_icon, vertical_bar } from './LocationCardStyles'

import { FaCircle } from "react-icons/fa6";

import LocationPin from '../../assets/location_pin.svg'

import LocationAdd from '../../assets/location_add.svg'

function LocationCard() {
    return (
        <div className={location_wrapper}>
        <div className={location_left_icon}>
           <FaCircle className={round_icon} />
           <div className={vertical_bar}></div>
           <FaCircle className={round_icon} />
        </div>
         <div className={location_bars_wrapper}>
            <div className={location_bars}>
                <span className={location_bar_text}>Gwaimpa 1, Abuja</span>
                <img className={image_bars} src={LocationPin}/>

            </div>
            <div className={location_bars}>
                <span className={location_bar_text}>2 ango Abdullahi 1, Abuja</span>
                <img className={image_bars} src={LocationAdd}/>
            </div>
         </div>
       </div>
    )
}

export default LocationCard
