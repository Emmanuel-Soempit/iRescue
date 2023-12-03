import React, { useContext, useState } from 'react'
import { img_style, reg_wrapper } from './LoginStyles'
import SignUpCard from '../../components/sign-up/SignUpCard'
import IrescueIcon from '../../assets/i-rescue.svg'
import LoginCard from '../../components/login_card/LoginCard'
import Mobile from '../../components/mobile_warning/Mobile'
import { AuthContext } from '../../context/AuthContext'



function Login() {

    const {setCurrentUser} = useContext(AuthContext)

    const [loginDetails, setLoginDetails] = useState({
        phone: '',
        password: ''
    })

    const [rememberMe, setRememberMe] = useState(false)

    const [error, setError] = useState({
        message: '',
        fault: null
    })

    const [isLoading, setIsLoading] = useState(false)



    return (
        <>
        <div className={reg_wrapper}>

            <img src={IrescueIcon} className={img_style}/>

                 <LoginCard 
                 loginDetails={loginDetails} 
                 setLoginDetails={setLoginDetails} 
                 error={error}
                 setError={setError}
                 rememberMe={rememberMe}
                 setRememberMe={setRememberMe}
                 isLoading={isLoading}
                 setIsLoading={setIsLoading}
                 setCurrentUser={setCurrentUser}
                 />
                
        </div>
        <Mobile/>
        </>
    )
}

export default Login
