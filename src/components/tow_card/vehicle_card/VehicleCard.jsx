import React from 'react'
import { divA, divA_icon, divA_text, divB, divB_micro_text, divC, divC_estimated_text, vehicle_card_wrapper } from './VehicleCardStyles'
import TowTruck from '../../../assets/towtruck.svg'

function VehicleCard({arrivalTime, priceRange}) {
    return (
        <div className={vehicle_card_wrapper}>
            <div className={divA}>
                <span className={divA_text}>Frame</span>
                <img src={TowTruck} className={divA_icon}/>
            </div>

            <div className={divB}>
                <span className={divB_micro_text}>Micro</span>
                <span className='text-[9px] text-gray-400'>{`Arrival in ${arrivalTime}`}</span>
            </div>

            <div className={divC}>
                <span className={divC_estimated_text}>Estimated Price</span>
                <span className='text-[10px] text-gray-400'>{priceRange}</span>
            </div>

        </div>

    )
}

export default VehicleCard
