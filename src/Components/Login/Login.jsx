import { Link } from "react-router-dom";
import { Button, Input, useBack } from "../../Settings";
import { useEffect } from "react";

export const Login = () => {
  
  return (
    <div className="modal_form__box">
      <form className="modal__form">
        <Input
          type="email"
          placeholder="E-mail или номер телефона"
          aria-label="E-mail или номер телефона"
        />
        <Input type="password" placeholder="Пароль" aria-label="Пароль" />
        <Button className="border-transparent">Войти</Button>
      </form>
      <div className="modal_form__discription_box">
        <h3>Впервые на iTicket.UZ?</h3>
        <Link to={"/register"}>Зарегистрироваться сейчас</Link>
      </div>
    </div>
  );
};
