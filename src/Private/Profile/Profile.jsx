import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
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
import { Button, Context, FormikField, setProfileData, setProfileDisabled, setProfileErrorUpdateAlert, setProfileSuccessUpdateAlert, setUser, useBack, useLoader } from "../../Settings";
import axios from "axios";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "react-query";
export const Profile = () => {
  const {back, typeBack} = useBack(true)
  const {
    modalSign,
    setModalSign,
    authenticationType,
    user,
    profileData,
    profileDisabled,
    profileSuccessUpdateAlert,
    profileErrorUpdateAlert,
  } = useSelector(({ Reducer }) => Reducer);
  const { signType, firebaseModal, setFirebaseModal } = useContext(Context);
  const {openLoader} = useLoader()
  const dispatch = useDispatch();
  const handleGetProfile = useCallback(async () => {
    try {
      if (!profileData?.length) {
        const request = await axios
          .get(process.env.REACT_APP_SERVER + `/users/${user.id}`)
          .catch((error) => console.log(error));
        if (request.status === 200 || request.status === 304) {
          const response = await request.data;
          dispatch(setProfileData(response));
        }
      }
    } catch (error) {
      return error;
    }
  }, [user.id]);
  const initialValues = { ...user, password: "Password" };
  const validationSchema = yup.object({
    name: yup.string().required("Name its required !"),
    lastname: yup.string().required("Lastname its required !"),
    email: yup
      .string()
      .email("Email its invalid !")
      .required("Email its required"),
    password: yup
      .string()
      .min(3, "Min 3")
      .max(12, "Max 12")
      .required("Password its required !"),
  });
  const {mutate} = useMutation((data) => {
    axios.put(process.env.REACT_APP_SERVER + `/users/${user.id}`, data).then(response => {
      if(response.status === 200 || response.status === 304){
        openLoader()
        dispatch(setProfileDisabled(true))
        dispatch(setUser(response.data))
        handleGetProfile()
        setTimeout(() => {
          dispatch(setProfileSuccessUpdateAlert(true))
        }, 2000)  
      }
    }) 
  })
  const handleSub = (event) => {
    if(event.password !== "Password"){
      mutate({...event, date: new Date().toLocaleString().concat(" Update-it its user data !")})
    }else{
      dispatch(setProfileErrorUpdateAlert(true))
    }
  };
  const handleValue = ({email, name, lastname}) => {
      if(email !== profileData?.email || name !== profileData?.name || lastname !== profileData?.lastname){
        dispatch(setProfileDisabled(false))
      }else{
        dispatch(setProfileDisabled(true))
      }
  }
  useEffect(() => {
    if(typeBack){
      back()
    }
  },[typeBack])
  useEffect(() => {
    handleGetProfile();
  }, [handleGetProfile]);
  return (
    <>
      <section className="profile">
        <Header active={true} />
        <div className="container">
          <div className="profile__inner">
            {[profileData]?.length && (
              <div className="profile__title_box">
                <h2>Profile ma'lumotlarini yangilash</h2>
              </div>
            )}
            {[profileData]?.length && (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSub}
              >
                {({ errors, touched, values }) => {
                  handleValue(values)
                  return (
                    <Form className="profile__form">
                          <>
                            {errors?.name && touched?.name ? (
                              <ErrorMessage component={"p"} className="form__error_text" name="name" id="name"/>
                            ): ""}
                            <FormikField type="text" id="name" name="name" />
                            {errors?.lastname && touched?.lastname ? (
                              <ErrorMessage component={"p"} className="form__error_text" name="lastname" id="lastname"/>
                            ): ""}
                            <FormikField
                              type="text"
                              id="lastname"
                              name="lastname"
                            />
                            {errors?.email && touched?.email ? (
                              <ErrorMessage component={"p"} className="form__error_text" name="email" id="email"/>
                            ): ""}
                            <FormikField type="email" id="email" name="email" />
                            {errors?.password && touched?.password ? (
                              <ErrorMessage component={"p"} className="form__error_text" name="password" id="password"/>
                            ): ""}
                            <FormikField
                              type="text"
                              id="password"
                              name="password"
                            />
                            <Button
                              type="submit"
                              styledType={
                                profileDisabled ? "disabledButton" : ""
                              }
                              disabled={profileDisabled}
                              className="border-transparent"
                            >
                              Yuborish
                            </Button>
                          </>
                        
                    </Form>
                  );
                }}
              </Formik>
            )}
          </div>
        </div>
      </section>
      <Alert success={true} discription={"Profile ma'lumotlari muvaffaqiyatli yangilandi !"} alert={profileSuccessUpdateAlert} error={false} setAlert={setProfileSuccessUpdateAlert}/>
      <Alert success={true} discription={"Password ni yangilang yoki eski passwordingizni quying !"} alert={profileErrorUpdateAlert} error={true} setAlert={setProfileErrorUpdateAlert}/>
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
