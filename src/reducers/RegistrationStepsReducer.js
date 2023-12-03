import { regSteps } from "../utils/RegSteps";

function RegistrationStepsReducer(state,action) {
  
    switch (action.type) {
     case regSteps.signup : return {current: regSteps.signup, data: action.data};
     case regSteps.otp: return {current: regSteps.otp, data: action.data};
    }
 
 }
 
 export default RegistrationStepsReducer
 