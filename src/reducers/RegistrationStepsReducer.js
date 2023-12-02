import { regSteps } from "../utils/RegSteps";

function RegistrationStepsReducer(state,action) {
  
    switch (action.type) {
     case regSteps.signup : return {current: regSteps.signup};
     case regSteps.otp: return {current: regSteps.otp};
    }
 
 }
 
 export default RegistrationStepsReducer
 