import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ErrorBox, ErrorTitle, SlideBtn, useBack, useLoader } from "../../Settings";
import { Header, SearchBox } from "../../Components";
import "./likeTovars.scss";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
export const LikeTovars = () => {
  const { likeTovars } = useSelector(({ Reducer }) => Reducer);
  const { openLoader } = useLoader();
  const navigate = useNavigate();
  const { back, typeBack } = useBack(true);
  const { addItem } = useCart();
  useEffect(() => {
    console.log(likeTovars);
  }, [likeTovars]);
  const handleClick = (event, item) => {
    if (!event.target.matches(".shop-btn")) {
      openLoader();
      navigate(`/tovar/${item.id}`);
    } else {
      addItem(item);
    }
  };
  useEffect(() => {
    if (typeBack) {
      back();
    }
  }, [typeBack]);
  return (
    <section className="like">
      <Header active={true} />
      <SearchBox />
      <div className="container">
        <div className="like__title_box">
          <h2>Избранные</h2>
        </div>
        {likeTovars?.length ?  (
            <div className="like__search_inner">
            <select className="like__search_select">
              <option value="default" selected disabled>
                Выберите место проведения
              </option>
            {likeTovars?.map(item =>{
                return(
                    <option value={item.vanue}>{item.vanue}</option>
                )
            })}
            </select>
          </div>
        ): null}
        {likeTovars?.length ? (
          <div className="like__tovars" style={{ position: "relative" }}>
            {likeTovars?.map((item) => {
              return (
                <div
                  className="slide"
                  onClick={(event) => handleClick(event, item)}
                  key={item.id}
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
                        <strong className="slide__user_name">
                          {item.name}
                        </strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adsl</p>
                      </div>
                      <SlideBtn
                        onClick={() => console.log("ishladi")}
                        className="slide__btn shop-btn border-transparent"
                      >
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
                </div>
              );
            })}
          </div>
        ) : (
            <ErrorBox>
                <ErrorTitle className="error">Saqlangan tovarlar yuq</ErrorTitle>
            </ErrorBox>
        )}
      </div>
    </section>
  );
};
