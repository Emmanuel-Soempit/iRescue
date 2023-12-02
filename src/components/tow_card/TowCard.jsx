import React from 'react'
import { tow_card_wrapper, tow_text } from './TowCardStyles'
import VehicleCard from './vehicle_card/VehicleCard'

function TowCard() {


    return (
        <div className={tow_card_wrapper}>

            <span className={tow_text}>What car do you wish to tow?</span>
            
             
           <VehicleCard arrivalTime='7 minutes' priceRange='N3,000 - N8,000'/>
           <VehicleCard arrivalTime='3 minutes' priceRange='N12,000 - N20,000'/>

        </div>
    )
}

export default TowCard
