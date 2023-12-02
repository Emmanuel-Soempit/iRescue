import React from 'react'
import { header_text, num_wrapper, otp_wrapper, verify_button } from './OTPStyles'
import {useNavigate} from 'react-router-dom'

function OTPCard({dispatcher}) {

    const navigate = useNavigate() 

     const displayOTPNumber = () => {
          let numbers = []

           for (let index = 0; index < 5; index++) {
                  numbers.push(<div key={index} className='w-[18%] h-full bg-gray-300'></div>)
                 }

            return numbers     
     }

     const navigateToLogin = () => {
         navigate('/login')
     }

    return (
        <div className={otp_wrapper}>
            <span className={header_text}>Validate your OTP</span>

            <div className={num_wrapper}>
               {displayOTPNumber()}
            </div>

            <button 
            onClick={navigateToLogin}
            className={verify_button}>Verify OTP</button>
        </div>
    )
}

export default OTPCard
