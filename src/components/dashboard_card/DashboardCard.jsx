import React from 'react'
import { bottom_left, bottom_wrapper, cash_text, dashboard_card_wrapper, header_text, iRescue_button, switch_text, top_wrapper} from './DashboardCardStyles'
import LocationCard from '../location_card/LocationCard';
import CarType from '../car_type/CarType';
import TowCard from '../tow_card/TowCard';
import { IoIosArrowDown } from "react-icons/io";
import CashImg from '../../assets/cash.svg'

function DashboardCard() {
    return (
        <div className={dashboard_card_wrapper}>

            <div className={top_wrapper}>
                <h1 className={header_text}>Towing Details</h1>
                <LocationCard/>
                <CarType/>
                <TowCard/>
            </div>

            <div className={bottom_wrapper}>

                <div className={bottom_left}>
                    <span className={cash_text}>Cash<IoIosArrowDown/></span>
                    <span className={switch_text}><img src={CashImg}/> Switch payment</span>
                </div>

                <button className={iRescue_button}>
                    Select iRescue
                </button>
              
            </div>
            
        </div>
    )
}

export default DashboardCard
