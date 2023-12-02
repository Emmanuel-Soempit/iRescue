import React from 'react'
import { dashboard_wrapper, image_wrapper } from './DashboardStyles'
import DashboardCard from '../../components/dashboard_card/DashboardCard'
import map from '../../assets/map.svg'

function Dashboard() {


    return (
        <div className={dashboard_wrapper}>
  
         <DashboardCard />
         
         <img src={map} className={image_wrapper} />
            
        </div>
    )
}

export default Dashboard
