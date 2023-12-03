import React, { useEffect } from 'react'
import { form_div_styles, form_texts, form_wrapper, input_style, input_style_error, labels_text, login_button, login_card_wrapper, login_text } from './LoginCardStyles'
import { RiCheckboxBlankFill, RiCheckboxFill } from "react-icons/ri";
import axios from 'axios';
import Spinner from '../../utils/Spinner';
import { useNavigate } from 'react-router-dom';

const loginApiUrl = 'https://irescue.app/api/login'

function LoginCard({loginDetails, setLoginDetails, error, setError, rememberMe, setRememberMe, isLoading, setIsLoading, setCurrentUser}) {

    //navigate object
   const navigate = useNavigate()


   //post login request with credentials
    const postLoginCredentials = () => {
        axios.post(
            loginApiUrl, 
            loginDetails,
            { headers: {
                'Content-Type': 'application/json',
              },
            }
            )
             .then(response => {
                console.log(response)
                setIsLoading(false)
                setCurrentUser(response.data.user)
                navigate(`/dashboard/${response.data.user.firstname}&${response.data.user.id}`)
            })
             .catch(details => {
                if(details.response){
                    setError({message: details.response.data?.error, fault: 3})
                } else{
                    setError({message: details.message, fault: 3})
                }
                setIsLoading(false)
                console.log(details)
                setLoginDetails({phone: '', password: ''})
            })  
    }
    

    //On form submit handler
    const handleSubmitForm = (e) => {
        e.preventDefault()
        
        if(!loginDetails.phone){
         setError({
             message: 'Please enter a phone No',
             fault: 1
         })            
         return
        }
    
        if(!loginDetails.password){
         setError( { 
             message: 'Please enter a password',
             fault: 2
           })
         return
         }
     
        setError({
         message: '',
         fault: null
        })

        setIsLoading(!isLoading)
    
        postLoginCredentials()
    }
    
    
    // handler function for any input Onchange in form
    const handleOnInputChange = (val, type) => {
        switch(type){
          case 'phone': return setLoginDetails(prev => {
                             return {
                                phone: val,
                                password: prev.password
                             }      
                         });
          case 'password': return setLoginDetails(prev => {
                          

                          return {
                             phone: prev.phone,
                             password: val
                          }      
                      })
        }
    }

    return (
        <div className={login_card_wrapper}>

            <span className={login_text}>Login into iRescue.</span>

             <form 
             onSubmit={handleSubmitForm}
             className={form_wrapper}>

                <label className={labels_text}>Phone No.</label>
                <input 
                onChange={(e) => handleOnInputChange(e.target.value,'phone')}
                value={loginDetails.phone}
                type='tel' 
                className={error.fault === 1 ? input_style_error: input_style} 
                placeholder='Enter valid phone no'/>

                <label className={labels_text}>Enter your Password</label>
                <input 
                onChange={(e) => handleOnInputChange(e.target.value,'password')}
                value={loginDetails.password}
                type='password' 
                className={error.fault === 2 ? input_style_error: input_style} 
                placeholder='Type your password here' />

                <div className={form_div_styles}>
                    <span
                     onClick={() => setRememberMe(!rememberMe)}
                     className={form_texts}>
                        {rememberMe ? 
                        <RiCheckboxFill /> :
                        <RiCheckboxBlankFill />}
                         Remember me?
                     </span>
                    <span className={form_texts}>Forgot password?</span>
                </div>
                      
                { error.message && <span className='text-sm text-red-700'>{error.message}</span>}

                {isLoading && <div className='w-full flex justify-center items-center'><Spinner/></div>}

                <button 
                 type="submit"
                 className={login_button}>
                  Login
                </button>
             </form>

            
        </div>
    )
}

export default LoginCard
