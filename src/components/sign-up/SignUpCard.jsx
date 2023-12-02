import React from 'react'
import { button_style, form_inner_div, form_style, input_style, sign_up_text, sign_up_wrapper } from './SignUpStyles'
import { regSteps } from '../../utils/RegSteps'

function SignUpCard({dispatcher}) {

    const getOTP = () => {
        dispatcher({type: regSteps.otp})
    }

    return (
        <div className={sign_up_wrapper}>
            <span className={sign_up_text}>Sign up Now</span>
           
           <form className={form_style}>

            <div className={form_inner_div}>
               <input className={input_style} placeholder='Full Name*'/>
               <input className={input_style} placeholder='Last Name*'/> 
            </div>

            <div className={form_inner_div}>
               <input type='email' className={input_style} placeholder='Email*'/>
               <input type='phone' className={input_style} placeholder='Phone Number*'/> 
            </div>

            <div className={form_inner_div}>
               <input type='password' className={input_style} placeholder='Password*'/>
               <input type='password' className={input_style} placeholder='Confirm Password*'/> 
            </div>
            
           </form>


           <button 
           onClick={getOTP}
           className={button_style}>
              Submit Now
           </button>
         
        </div>
    )
}

export default SignUpCard
