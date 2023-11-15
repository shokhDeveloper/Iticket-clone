import "./slider.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Context, SlideBtn, useLoader } from "../../Settings";
import { useContext, useState } from "react";
import { useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
export const Slider = (props) => {
  const { token } = useSelector(({ Reducer }) => Reducer);
  const { setMainActive } = useContext(Context);
  const [swiper, setSwiper] = useState(null);
  const { openLoader } = useLoader();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleClick = (event) => {
    console.log(swiper);
    switch (event.target.id) {
      case "next":
        {
          swiper.slideNext();
        }
        break;
      case "prev":
        {
          swiper.slidePrev();
        }
        break;
      default:
        return false;
    }
  };
  const handleClickSlider = (event, item) => {
    if (!event.target.matches(".shop-btn")) {
        openLoader();
        navigate(`/tovar/${item.id}`);
        setMainActive(true);
      
    } else {
        if (token) {
            addItem(item);
          }
    }
  };
  return (
    <Swiper
      {...props}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => setSwiper(swiper)}
      onSlideChange={(swiper) => setSwiper(swiper)}
    >
      <button
        onClick={handleClick}
        className="main__prev border-transparent swiper-button-prev"
        id="prev"
      ></button>
      {props.json.map((item) => {
        return (
          <SwiperSlide
            className="slide"
            onClick={(event) => handleClickSlider(event, item)}
          >
            <div className="slide__body">
              {(function (slide) {
                if (slide.images) {
                  const { imageBackground } = slide.images;
                  const { imageUser } = slide.images;
                  return (
                    <div className="slide__image_box">
                      <img
                        className="slide__image"
                        src={imageBackground}
                        alt="Iticket-image"
                      />
                      <img
                        className="slide__image"
                        src={imageUser}
                        alt="Iticket-image"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="slide__image_box">
                      <img
                        className="slide__image"
                        src={slide.img}
                        alt="Iticket-image"
                      />
                    </div>
                  );
                }
              })(item)}
              <div className="slide__footer">
                <div className="slide__discription">
                  <strong className="slide__user_name">{item.name}</strong>
                  <p>Lorem ipsum dolor, sit amet consectetur adsl</p>
                </div>
                <SlideBtn className="slide__btn shop-btn border-transparent">
                  {item.price}
                </SlideBtn>
              </div>
            </div>
            <div className="slide__footer--active">
              <div className="slide__discription">
                <strong className="slide__user_name">{item.name}</strong>
                <p className="slide__discription_text">
                  {item.date} •{" "}
                  {item.vanue.split(" ").length > 2
                    ? `${item.vanue.split(" ").slice(0, 2).join(" ")} ...`
                    : item.vanue}{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <button
        onClick={handleClick}
        className="main__next border-transparent swiper-button-next"
        id="next"
      ></button>
    </Swiper>
  );
};
