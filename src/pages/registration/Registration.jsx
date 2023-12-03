import React, { useReducer, useState } from 'react'
import { img_style, loader_wrapper, reg_wrapper } from './RegistrationStyles'
import SignUpCard from '../../components/sign-up/SignUpCard'
import IrescueIcon from '../../assets/i-rescue.svg'
import RegistrationStepsReducer from '../../reducers/RegistrationStepsReducer'
import { regSteps } from '../../utils/RegSteps'
import OTPCard from '../../components/otp-card/OTPCard'
import Mobile from '../../components/mobile_warning/Mobile'
import { generateRandomString } from '../../utils/RandomStringGen'

const initialState = {current: regSteps.signup}

function Registration() {

    const [state, dispatch] = useReducer(RegistrationStepsReducer, initialState)

    const [isLoading, setIsLoading] = useState(false)

    const [regDetails, setRegDetails] = useState({
       firstname: '',
       lastname: '',
       phone: '',
       email: '',
       password: '',
       refer: '',
    })

    const [otp, setOtp] = useState('')

    const [formError, setFormError] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')


    const displayLoaderComps = () => {
        let numbers = []
         for (let index = 0; index < 3; index++) {
                numbers.push(<div key={index} className='w-[25%] h-[80%] bg-gray-300'></div>)
               }
          return numbers     
   }



    return (
        <>        
        <div className={reg_wrapper}>

            <img src={IrescueIcon} className={img_style}/>

            {state.current === regSteps.signup && 

                 <SignUpCard 
                  regDetails={regDetails} 
                  setRegDetails={setRegDetails} 
                  confirmPassword={confirmPassword}
                  setConfirmPassword={setConfirmPassword}
                  formError={formError}
                  setFormError={setFormError}
                  dispatcher={dispatch}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  />
            
            }

            {state.current === regSteps.otp && 
                <OTPCard 
                otp={otp}
                setOtp={setOtp}
                state={state} 
                error={formError}
                setError={setFormError}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                dispatcher={dispatch}/>
            }              
           


             {state.current === regSteps.otp && 
                <div className={loader_wrapper}>
                   {displayLoaderComps()}
                </div>
             }

        </div>
        
        <Mobile/>
        </>

    )
}

export default Registration
