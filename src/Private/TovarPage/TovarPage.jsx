import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { setBarDisplay } from "../../Settings"
import { Header } from "../../Components"
import axios from "axios"
import kulturJSON from "../../Components/JSONS/kultur.json"
import popularJSON from "../../Components/JSONS/popular.json";
export const TovarPage = () => {
    const {name} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        const rejex = new RegExp(name, "gi")
        ;(async function(){
            try{
                const request = await axios.get(process.env.REACT_APP_SERVER + `/all-tovar` ).catch(error => console.log(error))
                if(request.status === 200 || request.status === 304){
                    const response = await request.data
                   if(response?.length){
                        let tovar = response.filter(item => item.name.match(rejex))
                        console.log(tovar)
                   }
                }
            }catch(error){
                return error
            }
        }())
    },[name])
    return( 
        <section className="main">
            <div className="container">
                <div className="main__section" style={{border: "1px solid black"}}>
                <Header/>

                </div>
            </div>
        </section>
    )
}