import PopularJson from "../../Components/JSONS/popular.json";
import KultutJson from "../../Components/JSONS/kultur.json";
import { useEffect, useState } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setMainAnimation,
  setSliderCountDec,
  setSliderCountInc,
} from "../../Settings";
import { HomeSlider } from "./HomeSlider";
import { Article, Carousel, Footer, Header,SearchBox, ShoppingBtn } from "../../Components";
export const Home = () => {
  const { loader, mainAnimation, sliderCount } = useSelector(
    ({ Reducer }) => Reducer
  );
  const [mainSectionDisplay, setMainSectionDisplay] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loader) {
      dispatch(setMainAnimation(true));
    }
    if (mainAnimation) {
      setTimeout(() => {
        setMainSectionDisplay(true);
      }, 2000);
    }
  }, [loader, mainAnimation]);
  const handleIncSlider = () => {
    let invalId = setInterval(() => {
      dispatch(setSliderCountInc());
    }, 4000);
    return () => clearInterval(invalId);
  };
  useEffect(() => {
    const stopInterval = handleIncSlider();
    return () => stopInterval();
  }, []);
  return (
    <>
      <section className={`main ${mainAnimation ? "main--animation" : ""}`}>
        <div className="container">
          <div
            className="main__section"
            style={{ opacity: mainSectionDisplay ? 1 : 0 }}
          >
            <Header />
            <SearchBox />
            <button
              className="main__next  main__btn border-transparent"
              onClick={() => dispatch(setSliderCountInc())}
            ></button>
            <HomeSlider />
            <button
              className="main__prev  main__btn border-transparent"
              onClick={() => dispatch(setSliderCountDec())}
            ></button>
          </div>
        </div>
      </section>
      {mainSectionDisplay && (
        <>
        <Carousel array={PopularJson} title={"Популярные Мероприятия"} />
        <Carousel array={KultutJson} title={"Культурные Мероприятия"}/>
        <Carousel array={PopularJson} title={"Выходные"} active={true}/>
        <Carousel array={KultutJson} title={"Детям"} active={true}/>
        <Article/>
        <Footer/>
        </>
      )}  
      <ShoppingBtn/>
    </>
  );
};
