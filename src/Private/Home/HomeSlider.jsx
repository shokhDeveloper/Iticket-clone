import axios from "axios"
import { useCallback, useEffect } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"

export const HomeSlider = () => {
    const {sliderCount} = useSelector(({Reducer}) => Reducer)
    async function handleGetSlider () {
        try{
                const request = await axios.get(process.env.REACT_APP_SERVER + "/slider-images").catch(error => console.log(error))
                if(request.status === 200 || request.status === 304){
                    const response = await request.data
                    console.log(response)
                    return response
                }          
        }catch(error){
            return error
        }
        
    }
    const {isError, isSuccess, data} = useQuery("/slider-images", handleGetSlider)
    return(
        <div className="home__slider">
            
            {isSuccess && (
                <>
                {data[0]?.map(item => {
                    return(
                        <a href={item.url}>
                            <img src={item.img}  alt="Iticket image" style={{transform: `translateX(${-1410 * sliderCount }px)`}} />
                        </a>
                    )
                })}
                </>
            ) }
               {isError && (
                    <>

                   {[...Array(1).keys()].map(item => {
                    return(
                        <a href={"https://iticket.uz"}>
                            <img src="https://via.placeholder.com/1410x700" alt="Iticket image" />
                        </a>
                    )
                   })}
                    </>
                )
            }
        </div>
    )
}