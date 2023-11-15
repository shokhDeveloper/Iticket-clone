import { useSelector } from "react-redux";
import { Adress } from "../Adress";
import "./tovarPageInfo.scss";
export const TovarPageInfos = () => {
    return(
        <section className="about">
            <div className="container">
                <ul className="about__cards">
                    <li className="about__card">
                        <div className="about_card__info">
                            <div className="about_card__title_box">
                            <span>Место</span>
                            <span>Дата</span>
                            </div>
                        </div>
                    </li>
                    <li className="about__card">
                        <div className="about_card__info">
                            <div className="about_card__title_box">
                            <span>Место</span>
                            <span>Дата</span>
                            </div>
                        </div>
                    </li>
                    <li className="about__card">
                        <div className="about_card__info">
                            <div className="about_card__title_box">
                            <span>Место</span>
                            <span>Дата</span>
                            </div>
                        </div>
                    </li>
                    <li className="about__card">
                        <div className="about_card__info">
                            <div className="about_card__title_box">
                            <span>Место</span>
                            <span>Дата</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <Adress/>
            </div>
        </section>
    )
}