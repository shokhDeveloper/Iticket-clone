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
  Like,
  setDataPage,
  setModalSign,
  useBack,
} from "../../Settings";
import {
  Authentication,
  Header,
  Login,
  Modal,
  Register,
  SearchBox,
} from "../../Components";
import axios from "axios";
export const TovarPage = () => {
  const { dataPage, authenticationType, modalSign } = useSelector(
    ({ Reducer }) => Reducer
  );
  const {back, typeBack} = useBack(true)
  const { mainActive, setFirebaseModal, firebaseModal, signType } =
    useContext(Context);
  const dispatch = useDispatch();
  const { id } = useParams();
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
    if(typeBack){
        back()
    }
  },[typeBack])
  return (
    <>
      <section className="main" style={{background: "#f9f9f9"}}>
        <div className="container">
          <div
            className={`main__section`.concat(mainActive ? " tovar__page" : "")}
            style={{ border: "1px solid black" }}
          >
            <Header />
            <SearchBox/>
            {dataPage?.map((item) => {
              return (
                <div className="main__tovar_page" style={{backgroundImage: `url(${item.img})`}} key={item.id}>
                  <div className="main_tovar__btns">
                    {(function(id){
                        let result = null
                        result = kulturJSON.find(item => item.id === id) 
                        result = popularJSON.find(item => item.id === id)
                        if(result?.id){
                            return(
                                <Button className="border-transparent border" style={{marginBottom: "1rem"}}>{result.price}</Button>
                            )
                        }
                    }(item.id))}
                <Like/>
                    <button className="border-transparent">
                    <BsSendFill />
                    </button>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
      
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
