import "./popular.scss";
import PopularJson from "../JSONS/popular.json";
import { Slider } from "../slider"

export const Popular = () => {
    return(
        <section className="popular">
            <div className="container">
                <div className="popular__title_box">
                    <h1 className="popular__title">Популярные Мероприятия</h1>
                </div>
            </div>
            <Slider className={"slider slider-popular"} json={PopularJson}/>
        </section>
    )
}