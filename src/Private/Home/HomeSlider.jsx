import axios from "axios"
import { useCallback, useEffect } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"

export const HomeSlider = () => {
    const {sliderCount, sliderArray} = useSelector(({Reducer}) => Reducer)
    // async function handleGetSlider () {
    //     try{
    //             const request = await axios.get(process.env.REACT_APP_SERVER + "/slider-images").catch(error => console.log(error))
    //             if(request.status === 200 || request.status === 304){
    //                 const response = await request.data
    //                 console.log(response)
    //                 return response
    //             }          
    //     }catch(error){
    //         return error
    //     }
        
    // }
    // const {isError, isSuccess, data} = useQuery("/slider-images", handleGetSlider)
    return(
        <div className="home__slider">
            
            {/* {isSuccess && ( */}
                <>
                {sliderArray?.map(item => {
                    return(
                        <a href={item}>
                            <img src={item}   style={{transform: `translateX(${-1410 * sliderCount }px)`}} />
                        </a>
                    )
                })}
                </>
            {/* ) } */}
        </div>
    )
}