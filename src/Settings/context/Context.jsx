import { createContext, useEffect, useState } from "react";
import { getItem, removeItem, setItem } from "../Utils";

export const Context = createContext()
export const ContextProvider = ({children}) => {
    const [firebaseModal, setFirebaseModal] = useState(false)
    const pageActiveStorage = getItem("page-active") ? true : false
    const [mainActive, setMainActive] = useState(pageActiveStorage )
    const [signType, setSignType] = useState("login")
    const [likeTovar, setLikeTovar] = useState(false)
    const [saveTovars, setSaveTovars] = useState()
    useEffect(() => {
        if(mainActive){
            setItem("page-active", "true")
        }else {
            removeItem("page-active")
        }
    },[mainActive])   
    return(
        <Context.Provider value={{firebaseModal, setFirebaseModal, mainActive, setMainActive, signType, setSignType, likeTovar, setLikeTovar, saveTovars, setSaveTovars }}>
            {children}
        </Context.Provider>
    )
}