import { createContext, useState } from "react";

export const Context = createContext()
export const ContextProvider = ({children}) => {
    const [firebaseModal, setFirebaseModal] = useState(false)
    return(
        <Context.Provider value={{firebaseModal, setFirebaseModal}}>
            {children}
        </Context.Provider>
    )
}