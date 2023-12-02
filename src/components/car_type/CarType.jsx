import React from 'react'
import { car_type_header_text, car_type_top_wrapper, car_type_wrapper, cars_type_bottom_wrapper, cars_wrapper, toyota_card_wrapper, toyota_icons, toyota_logo_text_wrapper, toyota_text } from './CarTypeStyles'
import { cars } from '../../utils/Cars'
import CarCard from './CarCard'
import ToyotaImg from '../../assets/toyotalogo.svg'
import shield from '../../assets/shield.svg'

function CarType() {

    const getCars = () => {
    
        return cars.map((currentCar) => <CarCard key={currentCar.id} data={currentCar} />)

    }

    return (
        <div className={car_type_wrapper}>

           <div className={car_type_top_wrapper}>
             <span className={car_type_header_text}>Select car type</span>
             <div className={cars_wrapper}>
             {getCars()}
             </div>
           </div>

 
           <div className={cars_type_bottom_wrapper}>

            <span className={car_type_header_text}> Select car make</span>

            <div className={toyota_card_wrapper}>
                <div className={toyota_logo_text_wrapper}>
                    <img className={toyota_icons} src={ToyotaImg} />
                    <span className={toyota_text}>Toyota Metirx 2014</span>
                </div>
                <img className={toyota_icons} src={shield}/>
            </div>

           </div>
            
            
        </div>
    )
}

export default CarType
