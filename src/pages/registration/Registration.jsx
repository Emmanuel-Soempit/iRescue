import React, { useReducer } from 'react'
import { img_style, loader_wrapper, reg_wrapper } from './RegistrationStyles'
import SignUpCard from '../../components/sign-up/SignUpCard'
import IrescueIcon from '../../assets/i-rescue.svg'
import RegistrationStepsReducer from '../../reducers/RegistrationStepsReducer'
import { regSteps } from '../../utils/RegSteps'
import OTPCard from '../../components/otp-card/OTPCard'

const initialState = {current: regSteps.signup}

function Registration() {

    const [state, dispatch] = useReducer(RegistrationStepsReducer, initialState)

    const displayLoaderComps = () => {
        let numbers = []

         for (let index = 0; index < 3; index++) {
                numbers.push(<div key={index} className='w-[25%] h-[80%] bg-gray-300'></div>)
               }

          return numbers     
   }



    return (
        <div className={reg_wrapper}>

            <img src={IrescueIcon} className={img_style}/>

            {state.current === regSteps.signup && 
                 <SignUpCard dispatcher={dispatch}/>
            
            }

            {state.current === regSteps.otp && 
                <OTPCard dispatcher={dispatch}/>
            }              
           


             {state.current === regSteps.otp && 
                <div className={loader_wrapper}>
                   {displayLoaderComps()}
                </div>
             }

        </div>
    )
}

export default Registration
