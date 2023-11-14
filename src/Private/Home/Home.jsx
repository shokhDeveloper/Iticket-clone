import PopularJson from "../../Components/JSONS/popular.json";
import KultutJson from "../../Components/JSONS/kultur.json";
import { useContext, useEffect, useState } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  Context,
  setMainAnimation,
  setModalSign,
  setSliderCountDec,
  setSliderCountInc,
} from "../../Settings";
import { HomeSlider } from "./HomeSlider";
import { Article, Authentication, Carousel, Footer, Header,Login,Register,SearchBox, ShoppingBtn } from "../../Components";
import { Modal } from "../../Components";
import { Route, Routes } from "react-router";
export const Home = () => {
  const { loader, mainAnimation, modalSign, authenticationType } = useSelector(
    ({ Reducer }) => Reducer
  );
  const {setFirebaseModal, firebaseModal} = useContext(Context)
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
        {modalSign && (
          <Modal modal={modalSign} setModal={setModalSign} links={{google: true, faceBook: true, wk: true}} title={"Войти"} context={false} >
            <Routes>
            <Route path="/" element={<Login modal={modalSign} setModal={setModalSign} />} />
            <Route path="/login" element={<Login modal={modalSign} setModal={setModalSign} />} />
            <Route path="/register" element={<Register modal={modalSign} setModal={setModalSign} />} />
          </Routes>
          </Modal>
       )}
       {firebaseModal && (
        <Modal modal={firebaseModal} setModal={setFirebaseModal} links={null} title={"Password kiriting"} context={true}>
          <Authentication type={authenticationType} />
        </Modal>
       )}
        <ShoppingBtn/>
        </>
      )}  
    </>
  );
};
