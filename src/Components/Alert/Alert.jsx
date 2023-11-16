import { useEffect } from "react";
import "./alert.scss";
import { useDispatch } from "react-redux";
export const Alert = ({error, success, discription, alert, setAlert}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(alert){
            setTimeout(() => {
                dispatch(setAlert(false))
            },3000) 
        }
    },[alert])
    return(
        <div className={`alert ${error ? "alert__danger" : success ? "alert__success": ""}`} style={{display: alert ? "block": "none"}}>
            <div className="alert__info">
                <p>{discription}</p>
            </div>
        </div>
    )
};
