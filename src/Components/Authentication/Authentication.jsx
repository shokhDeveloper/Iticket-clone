import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Context, FormikField, Input, setGoogleUser, setToken, setUser, useLoader } from "../../Settings";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
export const Authentication = () => {
  const { authenticationType, googleFirebaseUser, token } = useSelector(
    ({ Reducer }) => Reducer
  );
  const {openLoader} = useLoader()
  const dispatch = useDispatch()
  const date = new Date();
  const initialValues = {
    password: null,
  };
  const validationSchema = yup.object({
    password: yup
      .string()
      .min(3, "3 Min 3")
      .max(12, "Max 12")
      .required("Password its required"),
  });
  const { mutate } = useMutation((data) => {
    try{
        axios.post(process.env.REACT_APP_SERVER + `/${authenticationType}`, data).then(response => {
            if(response.status === 200 || response.status === 304 || response.status === 201 && response.data){
                const {data:{accessToken, user}} = response
                dispatch(setGoogleUser(user))
                dispatch(setToken(accessToken))
            }
        }).catch(error => console.log(error))
    }catch(error){
        return error
    }
  });
  const handleSub = (event) => {
    if (event.password) {
      mutate({...googleFirebaseUser, ...event, date: `${date.toLocaleString()} Login-At its user !`})
    }
  };
  useEffect(() => {
    if(token){
        dispatch(setUser(googleFirebaseUser))
        openLoader()
        window.location.reload()
    }
  },[token])
  return (
    <Formik
      onSubmit={handleSub}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => {
        return (
          <Form className="modal__form authentication-modal">
            {errors?.password && touched?.password && (
                <ErrorMessage id="password" name="password" />
            )}
            <FormikField
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
            <Button
              style={{ marginTop: "1rem !important" }}
              className="border-transparent"
              type={"submit"}
            >
              Yuborish
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
