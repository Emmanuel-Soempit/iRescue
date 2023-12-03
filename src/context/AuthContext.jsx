import {createContext, useEffect, useState} from 'react'


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)

    
    

    useEffect(() => {
         return () => {
            setCurrentUser({})
         }
    },[]);


    return (<AuthContext.Provider value={{currentUser,setCurrentUser}}>
        {children}
    </AuthContext.Provider>)
}