import PopularJson from "../JSONS/popular.json";
import { Slider } from "../slider"

export const Carousel = ({array, title, active}) => {
    console.log(array)
    return(
        <section className={`carousel popular ${active ? "carousel--active": ""}`}>
            <div className="container">
                <div className="carousel__title_box popular">
                    <h1 className="popular__title">{title}</h1>
                </div>
            </div>
            <Slider className={"slider slider-popular"} json={array}/>
        </section>
    )
}