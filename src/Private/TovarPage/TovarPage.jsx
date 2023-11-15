import "./mainPage.scss";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router";
import { BsSendFill } from "react-icons/bs";
import kulturJSON from "../../Components/JSONS/kultur.json";
import popularJSON from "../../Components/JSONS/popular.json";
import {
  Button,
  Context,
  setDataPage,
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
export const TovarPage = () => {
  const { dataPage, authenticationType, modalSign } = useSelector(
    ({ Reducer }) => Reducer
  );
  const { back, typeBack } = useBack(true);
  const { mainActive, setFirebaseModal, firebaseModal, signType } =
    useContext(Context);
  const dispatch = useDispatch();
  const { id } = useParams();
  const {addItem} = useCart()
  useEffect(() => {
    (async function () {
      try {
        const request = await axios
          .get(process.env.REACT_APP_SERVER + `/all-tovar/${id}`)
          .catch((error) => console.log(error));
        if (request.status === 200 || request.status === 304) {
          const response = await request.data;
          dispatch(setDataPage([response]));
        }
      } catch (error) {
        return error;
      }
    })();
  }, [id]);
  useEffect(() => {
    if (typeBack) {
      back();
    }
  }, [typeBack]);
  useEffect(() => {
     dispatch(setTovarResultPage(id)) 
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
                      result = kulturJSON.find((item) => item.id === id);
                      if (!result?.id) {
                        result = popularJSON.find((item) => item.id === id);
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
                            <button className="border-transparent">
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
