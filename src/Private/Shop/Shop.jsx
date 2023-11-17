import "./shop.scss";
import { useContext, useEffect } from "react";
import {
  Authentication,
  Footer,
  Header,
  Login,
  Register,
  SearchBox,
  ShoppingBtn,
} from "../../Components";
import {
  Context,
  ErrorBox,
  ErrorTitle,
  SlideBtn,
  useBack,
  useLoader,
} from "../../Settings";
import { useSelector } from "react-redux";
import { Modal } from "../../Components";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router";
export const Shop = () => {
  const { modalSign, setModalSign, authenticationType } = useSelector(
    ({ Reducer }) => Reducer
  );
  const { back, typeBack } = useBack(true);
  const navigate = useNavigate();
  const { openLoader } = useLoader();
  const { signType, firebaseModal, setFirebaseModal } = useContext(Context);
  const { items, removeItem } = useCart();
  const handleNavigateClick = (event, id) => {
    if (!event.target.matches(".slide__btn")) {
      navigate(`/tovar/${id}`);
      openLoader();
    } else {
      removeItem(id);
    }
  };
  const handleRenderPrice = (tovars) => {
    let result = 0;
    tovars?.map((item) => {
      let price = item.price.split(" ").slice(0, 2).join("")-0;
      if (Number(price)) {
        if (item.quantity > 1) {
          result += price * item.quantity;
        } else {
          result += price;
        }
    }
});
return result
};
  useEffect(() => {
    if (typeBack) {
      back();
    }
  }, [typeBack]);
  return (
    <section className="shop">
      <Header active={true} />
      <SearchBox />
      <div className="container">
        <div className="shop__title_box">
          <h2>Sotib olingan konsertlar</h2>
          {items?.length ? <h4>Sotib olingan tovarlar narxi = {handleRenderPrice(items)}</h4> : null}
        </div>
        {items?.length ? (
          <></>
        ) : (
          <ErrorBox>
            <ErrorTitle>Sotib olingan tovarlar yo'q</ErrorTitle>
          </ErrorBox>
        )}
        <div className="shop__inner">   
        
          {items?.map((item) => {
            return (
              <div
                className="slide"
                onClick={(event) => handleNavigateClick(event, item.id)}
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
                    <SlideBtn
                      styledType={"danger"}
                      className="slide__btn shop-btn border-transparent"
                    >
                      O'chirish
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
      </div>
      <Footer />
      <ShoppingBtn />
      {modalSign && (
        <Modal
          modal={modalSign}
          setModal={setModalSign}
          links={{ google: true, faceBook: true, wk: true }}
          title={"Войти"}
          context={false}
        >
          {signType === "login" || signType === null ? (
            <Login modal={modalSign} setModal={setModalSign} />
          ) : signType === "register" ? (
            <Register modal={modalSign} setModal={setModalSign} />
          ) : null}
        </Modal>
      )}
      {firebaseModal && (
        <Modal
          modal={firebaseModal}
          setModal={setFirebaseModal}
          links={null}
          title={"Password kiriting"}
          context={true}
        >
          <Authentication type={authenticationType} />
        </Modal>
      )}
    </section>
  );
};
