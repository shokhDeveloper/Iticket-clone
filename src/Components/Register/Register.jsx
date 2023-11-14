import { useContext, useEffect } from "react";
import { Button, Context, FormikField, Input, setToken, setUser, useBack, useLoader } from "../../Settings";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useMutation } from "react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
export const Register = ({modal, setModal}) => {
    const {setSignType} = useContext(Context)
    const {openLoader} = useLoader()
    const dispatch = useDispatch()
    const date = new Date()

const initialValues = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
    phone: "",
    password: "",
    nextPassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name its required !"),
    lastname: Yup.string().required("Lastname its required !"),
    phone: Yup.string().required("Phone its required !"),
    email: Yup.string()
      .email("Email its invalid")
      .required("Email its required !"),
    phone: Yup.string().required("Phone its required !"),
    password: Yup.string()
      .min(3, "Min 3")
      .max(12, "Max 12")
      .required("Password its required !"),
    nextPassword: Yup.string().required("Password its required"),
  });
  const {mutate} = useMutation((data) => {
    axios.post(process.env.REACT_APP_SERVER + "/register", data).then(response => {
        if(response.status === 201){
            const {accessToken, user} = response.data
            dispatch(setToken(accessToken))
            dispatch(setUser(user))
           dispatch(setModal(false))
            openLoader()
        }
    })
  })
  const handleSub = (event) => {
    if (event.password === event.nextPassword) {
     mutate({...event, date: `${date.toLocaleString()} Register-At its user` })
    }
  };
  return (
    <div className="modal_form__box">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSub}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => {
          return (
            <Form className="modal__form">
              <FormikField
                className={errors?.name && touched?.name ? "error-input": ""}
                type="text"
                placeholder="Имя"
                name="name"
                id="name"
                aria-label="Name"
              />
              
              <FormikField
                className={errors?.lastname && touched?.lastname ? "error-input": ""}
                type="text"
                placeholder="Фамилия"
                name="lastname"
                id="lastname"
                aria-label="Lastname"
              />
             
              <FormikField
              className={errors?.phone && touched?.phone ? "error-input": ""}
                type="text"
                placeholder="Мобильный"
                name="phone"
                id="phone"
                aria-label="Phone-number"
              />
               
              <FormikField
              className={errors?.email && touched?.email ? "error-input": ""}
                type="email"
                placeholder="E-mail"
                aria-label="Email"
                id="email"
                name="email"
              />
              
              <FormikField
              className={errors?.password && touched?.password ? "error-input": ""}
                type="password"
                placeholder="Пароль"
                aria-label="Password"
                id="password"
                name="password"
              />
              <FormikField
              className={errors?.nextPassword && touched?.nextPassword ? "error-input": ""}
                type="password"
                placeholder="Подтвердить пароль"
                aria-label="Password"
                name="nextPassword"
                id="nextPassword"
              />
              <Button className="border-transparent">Войти</Button>
            </Form>
          );
        }}
      </Formik>
      <div className="modal_form__discription_box">
        <h3>Уже зарегистрирован?</h3>
        <a href="#" onClick={() => setSignType("login")} >Войдите здесь</a>
      </div>
    </div>
  );
};
