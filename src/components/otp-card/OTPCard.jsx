import React, { useEffect, useState } from 'react'
import { header_text, num_wrapper, otp_wrapper, verify_button } from './OTPStyles'
import {useNavigate} from 'react-router-dom'
import OtpInput from 'react-otp-input'
import axios from 'axios'
import Spinner from '../../utils/Spinner'

const OtpApiUrl = 'https://irescue.app/api/loginWithOtp'

function OTPCard({ state, otp, setOtp, isLoading, setIsLoading, error, setError}) {

    //Navigator
    const navigate = useNavigate() 
   

    //post request to verify OTP
    const postOtp = (otp, email) => {
       axios.post(OtpApiUrl, {'otp': otp, email: email})
           .then(response => {
                setIsLoading(false)
                navigate('/login')
            })
            .catch(error => {
            setError(error)
            setIsLoading(false)
            })
    }

    useEffect(() => {
         setIsLoading(false)
         setError('')
    }, [])


    //Haadler function for any input onChange in form
    const handleOnOtpChanged = (val) => {
        setOtp(val)
    }

     //Navigattion function
     const navigateToLogin = () => {
        //  navigate('/login')

         setIsLoading(!isLoading)
         postOtp(otp, state.data.email)
      
     }


    return (
        <div className={otp_wrapper}>
            <span className={header_text}>Validate your OTP</span>
       
            <OtpInput
              value={otp}
              onChange={(val) => handleOnOtpChanged(val)}
              numInputs={4}
              inputStyle={{
                'background': 'gray',
                'border': '0',
                 'height': '35px',
                  'width': '20px',
              }}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
               />


            {isLoading && <Spinner/>}
            
            {error !== '' && 
              <span className='text-[10px] text-red-700'>{error}</span>
              }

            <button 
            onClick={navigateToLogin}
            className={verify_button}>Verify OTP</button>
        </div>
    )
}

export default React.memo(OTPCard)
