import React from 'react'
import { button_style, form_inner_div, form_style, input_style, sign_up_text, sign_up_wrapper } from './SignUpStyles'
import Spinner from '../../utils/Spinner'
import axios from 'axios'
import { regSteps } from '../../utils/RegSteps'




const regApiUrl = 'https://irescue.app/api/register'


function SignUpCard({ dispatcher, regDetails, setRegDetails, confirmPassword, setConfirmPassword,formError,setFormError,isLoading,setIsLoading}){



     //function to move to otp verfication component
      const moveToOTP = () => {
         setIsLoading(!isLoading)
         dispatcher({type: regSteps.otp, data: regDetails})
       }


      //Post request to register withdetails
      const postData = () => {
          axios.post(regApiUrl, regDetails )
            .then(response => {
      
                  if(response.data.message === 'Account already exists')
               {
                  setFormError(`Oops: ${response.data.message}`)
                  // navigate('/login')
                  setIsLoading(false)
               } else{
                  moveToOTP()
               }
            })
            .catch(error => {
                 setFormError(`An error occured: ${error}`)
             })
      
       }


      //Handle onSubmit from reg form
      const handleOnSubmit = (e) => {
         e.preventDefault()
         
        if (!regDetails.firstname){
            setFormError('Please enter firstname')
        
            return
         } 
         if (!regDetails.lastname){
            setFormError('Please enter lastname')
            return
         } 
         if (!regDetails.phone){
            setFormError('Please enter phone No')
            return
         } 
         if (!regDetails.email){
            setFormError('Please enter email')
            return
         } 
         if (!regDetails.password){
            setFormError('Please enter a password')
            return
         } 
         if (regDetails.password !== confirmPassword){
            setFormError('Password mismatch, please confirm passowrd')
            return
         } 
     
         setIsLoading(!isLoading)
         setFormError('')
         
         postData()
     
         console.log(regDetails)
       }

   
      // handler function for any input Onchange in form
       const handleOnInputChange = (type, value) => {

         switch (type) {
     
           case 'firstname' : return setRegDetails(prev => {
                                  return {
                                          firstname: value,
                                          lastname: prev.lastname,
                                          phone: prev.phone,
                                          email: prev.email,
                                          password: prev.password,
                                          refer: null,
                                         }
                             });
            case 'lastname' : return setRegDetails(prev => {
                              return {
                                      firstname: prev.firstname,
                                      lastname: value,
                                      phone: prev.phone,
                                      email: prev.email,
                                      password: prev.password,
                                      refer: null,
                                     }
                         });                   
     
            case 'phone' : return setRegDetails(prev => {
                           return {
                                   firstname: prev.firstname,
                                   lastname: prev.lastname,
                                   phone: value,
                                   email: prev.email,
                                   password: prev.password,
                                   refer: null,
                                  }
                      });
            case 'email' : return setRegDetails(prev => {
                        return {
                                firstname: prev.firstname,
                                lastname: prev.lastname,
                                phone: prev.phone,
                                email: value,
                                password: prev.password,
                                refer: null,
                               }
                   });       
     
            case 'password' : return setRegDetails(prev => {
                     return {
                             firstname: prev.firstname,
                             lastname: prev.lastname,
                             phone: prev.phone,
                             email: prev.email,
                             password: value,
                             refer: null,
                            }
                });        
         }
              
       }



    return (
        <div className={sign_up_wrapper}>
            <span className={sign_up_text}>Sign up Now</span>
           
           <form onSubmit={handleOnSubmit} className={form_style}>

            <div className={form_inner_div}>
               <input 
               onChange={(e) => handleOnInputChange('firstname',e.target.value)}
               value={regDetails.firstname}
               type='text' 
               className={input_style} 
               placeholder='First Name*'/>

               <input 
               onChange={(e) => handleOnInputChange('lastname',e.target.value)} 
               value={regDetails.lastname} 
               type='text'
               className={input_style}
               placeholder='Last Name*'/> 
            </div>

            <div className={form_inner_div}>
               <input
               onChange={(e) => handleOnInputChange('email',e.target.value)} 
               value={regDetails.email} 
               type='email' 
               className={input_style} 
               placeholder='Email*'/>

               <input 
               onChange={(e) => handleOnInputChange('phone',e.target.value)} 
               value={regDetails.phone} 
               type='phone' 
               className={input_style} 
               placeholder='Phone Number*'/> 
            </div>

            <div className={form_inner_div}>
               <input 
               onChange={(e) => handleOnInputChange('password', e.target.value)} 
               value={regDetails.password} 
               type='password' 
               className={input_style} 
               placeholder='Password*'/>

               <input 
               onChange={(e) => setConfirmPassword(e.target.value)}
               value={confirmPassword}
               type='password'
               className={input_style} placeholder='Confirm Password*'/> 
            </div>

            
            {formError !== '' && 
              <span className='text-sm text-red-700'>{formError}</span>
              }

              {
               isLoading && <Spinner/>
              }
           
            <button 
             type="submit"
             className={button_style}>
              Submit Now
            </button>
           </form>
        </div>
    )
}

export default React.memo(SignUpCard)
