import { Link } from "react-router-dom";
import { Button, Input, setModalLoginClassName, setModalSign, setToken, setUser, useLoader } from "../../Settings";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import axios from "axios";
export const Login = () => {
  const date = new Date()
  const {openLoader} = useLoader()
  const dispatch = useDispatch() 
  const validationSchema = yup.object({
    email: yup.string().email("Email its invalid !").required("Email its required"),
    password: yup.string().min(3, "Min 3").max(12, "Max 12").required("Password its required !")
  }) 
  const {register, watch, formState:{errors, isValid}, handleSubmit} = useForm({
    defaultValues :{
      email: "",
      password: ""
    },
    mode: "all",
    resolver: yupResolver(validationSchema)
  })
  const {mutate} = useMutation((data) => {
    axios.post(process.env.REACT_APP_SERVER + "/login", data).then(response => {
      if(response.status === 200){
        const {accessToken, user} = response.data
        if(accessToken && user){
          dispatch(setModalSign(false))
          openLoader()
          dispatch(setToken(accessToken))
          dispatch(setUser(user))
        }

      }
    })
  })
  const onSubmit = (event) => {
   mutate({...event, date: `${date.toLocaleString()} Login-At its user`})
  }
  useEffect(() => {
    if(errors?.email?.message && errors?.password?.message){
      dispatch(setModalLoginClassName(true))
    }else{
      dispatch(setModalLoginClassName(false))
    }
  },[errors, watch()])    
  watch()
  return (
    <div className="modal_form__box">
      <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
        {errors?.email && (
          <p className="form__error_text">{errors.email.message}</p>
        )}
        <Input
        className={errors?.email ? "error-input": ""} 
        {...register("email")}
          type="email"
          placeholder="E-mail или номер телефона"
          aria-label="E-mail или номер телефона"
        />
        {errors?.password && (
          <p className="form__error_text">{errors?.password?.message}</p>
        )}
        <Input className={errors?.password ? "error-input": ""} {...register("password")} type="password" placeholder="Пароль" aria-label="Пароль" />
        <Button disabled={!isValid} type="submit" className="border-transparent">Войти</Button>
      </form>
      <div className="modal_form__discription_box">
        <h3>Впервые на iTicket.UZ?</h3>
        <Link to={"/register"}>Зарегистрироваться сейчас</Link>
      </div>
    </div>
  );
};
