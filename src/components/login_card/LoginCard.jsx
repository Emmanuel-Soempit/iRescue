import React from 'react'
import { form_div_styles, form_texts, form_wrapper, input_style, input_style_special, labels_text, login_button, login_card_wrapper, login_text } from './LoginCardStyles'
import { RiCheckboxBlankFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function LoginCard() {

    const navigate = useNavigate()

    const handleLogin = () => {
          navigate('/dashboard')
    }

    return (
        <div className={login_card_wrapper}>

            <span className={login_text}>Login into iRescue.</span>

             <form className={form_wrapper}>

                <label className={labels_text}>Phone No.</label>
                <input type='phone' className={input_style_special} placeholder='Enter valid phone no'/>

                <label className={labels_text}>Enter your Password</label>
                <input type='password' className={input_style} placeholder='Type your password here' />

                <div className={form_div_styles}>
                    <span className={form_texts}><RiCheckboxBlankFill /> Remember me?</span>
                    <span className={form_texts}>Forgot password?</span>
                </div>

             </form>

             <button 
             onClick={handleLogin}
             className={login_button}>
                Login
             </button>
            
        </div>
    )
}

export default LoginCard
