import React from 'react'
import { img_style, reg_wrapper } from './LoginStyles'
import SignUpCard from '../../components/sign-up/SignUpCard'
import IrescueIcon from '../../assets/i-rescue.svg'
import LoginCard from '../../components/login_card/LoginCard'
import Mobile from '../../components/mobile_warning/Mobile'



function Login() {


    return (
        <>
        <div className={reg_wrapper}>

            <img src={IrescueIcon} className={img_style}/>

                 <LoginCard />
                
        </div>
        <Mobile/>
        </>
    )
}

export default Login
