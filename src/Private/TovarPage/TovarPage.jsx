import "./mainPage.scss";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router";
import { BsInstagram, BsSendFill, BsTelegram } from "react-icons/bs";
import {
  Button,
  Context,
  setDataPage,
  setModalSend,
  setModalSign,
  setTovarResultPage,
  useBack,
} from "../../Settings";
import {
  Authentication,
  Footer,
  Header,
  Like,
  Login,
  Modal,
  Register,
  SearchBox,
  ShoppingBtn,
  TovarPageInfos,
} from "../../Components";
import axios from "axios";
import { useCart } from "react-use-cart";
import { Kultur } from "../../Components/Kultur";
import { Popular } from "../../Components/Popular";
import { AllTovarBackground } from "../../Components/AllTovarbackground";
export const TovarPage = () => {
  const { dataPage, authenticationType, modalSign, modalSend, siteLink } = useSelector(
    ({ Reducer }) => Reducer
  );
  const { back, typeBack } = useBack(true);
  const { mainActive, setFirebaseModal, firebaseModal, signType } =
    useContext(Context);
  const dispatch = useDispatch();
  const { id } = useParams();
  const {addItem} = useCart()
  useEffect(() => {
    (function () {
      const filter = AllTovarBackground.filter(item => item.id === (id-0))
      dispatch(setDataPage(filter))
    })();
  }, [id]);
  useEffect(() => {
    if (typeBack) {
      back();
    }
  }, [typeBack]);
  useEffect(() => {
     dispatch(setTovarResultPage(id)) 
     window.scrollTo(0,0)
  },[id])
  return (
    <>
      <section className={`main ${mainActive ? "main__active": ""}`} style={{ background: "#dcdada" }}>
        <div className="container">
          <div
            className={`main__section`.concat(mainActive ? " tovar__page" : "")}
          >
            <Header />
            <SearchBox />
            {dataPage?.map((item) => {
              return (
                <div
                  className="main__tovar_page"
                  style={{ backgroundImage: `url(${item.img})` }}
                  key={item.id}
                >
                  <div className="main_tovar__btns">
                    {(function (id) {
                      let result = null;
                      result = Kultur.find((item) => item.id === id);
                      if (!result?.id) {
                        result = Popular.find((item) => item.id === id);
                      }
                      if (result?.id) {
                        return (
                          <>
                            <Button
                            onClick={() => {
                                addItem(result)
                            }}
                              className="border-transparent border"
                              style={{ marginBottom: "1rem" }}
                            >
                              {result.price}
                            </Button>
                            <Like tovar={result} />
                            <button onClick={() => dispatch(setModalSend(true))} className="border-transparent">
                              <BsSendFill />
                            </button>
                          </>
                        );
                      }
                    })(item.id)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <TovarPageInfos/>
      <ShoppingBtn/>
      {modalSend ? (
        <Modal modal={modalSend} context={false} links={null}  setModal={setModalSend} title={"Send its konser"}>
          <div className="send__links">
            <button onClick={() => {
              navigator.clipboard.writeText(siteLink)
            window.open("https://instagram.com")
            }} className="border-transparent"><BsInstagram/></button>
            <button onClick={() => {
              navigator.clipboard.writeText(siteLink)
              window.open("https://telegram.org", "blank")
            }} className="border-transparent"><BsTelegram/></button>
          </div>
      </Modal>
        ): null}
      <Footer/>
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
    </>
  );
};
