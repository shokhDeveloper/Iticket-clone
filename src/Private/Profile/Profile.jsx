import { useDispatch, useSelector } from "react-redux";
import {
  Authentication,
  Footer,
  Header,
  Login,
  Modal,
  Register,
  SearchBox,
  ShoppingBtn,
} from "../../Components";
import { useCallback, useContext, useEffect } from "react";
import { Button, Context, Input, setProfileData } from "../../Settings";
import axios from "axios";
import { Formik } from "formik";

export const Profile = () => {
  const { modalSign, setModalSign, authenticationType, user, profileData } = useSelector(
    ({ Reducer }) => Reducer
  );
  const { signType, firebaseModal, setFirebaseModal } = useContext(Context);
  const dispatch = useDispatch()
  const handleGetProfile = useCallback(async () => {
    try{
        if(!profileData?.length){
            const request = await axios.get(process.env.REACT_APP_SERVER + `/users/${user.id}`).catch(error => console.log(error))
            if(request.status === 200 || request.status === 304){
                const response = await request.data
                dispatch(setProfileData([response]))
            }
        }
    }catch(error){
        return error
    }
  },[user.id])
  const initialValues = {
    
  }
  useEffect(() => {
    handleGetProfile()
  },[handleGetProfile])
  return (
    <>
      <section className="profile">
        <Header active={true} />
        <div className="container">
            {profileData?.length && (
                <Formik >
                <form>
                    {profileData?.map(item => {
                        return(
                            <>
                            <Input type="text" defaultValue={item.name} />
                            <Input type="text" defaultValue={item.lastname} />
                            <Input type="email" defaultValue={item.email} />
                            <Input type="text" defaultValue={"Password"} />
                            <Button className="border-transparent">Yuborish</Button>
                            </>
                        )
                    })}
                </form>
                </Formik>
            )}
        </div>
      </section>

      <SearchBox />
      <ShoppingBtn />
      <Footer />
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
