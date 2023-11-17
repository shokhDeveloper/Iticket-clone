import { Field } from "formik";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *::before, *::after, *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      background: rgb(220, 218, 218);
      }
    .container{
        max-width: 1450px;
        margin: 0 auto;
        padding: 0 20px;
   }
   .border-transparent{
    border: 1px solid transparent;
    outline: 1px solid transparent;
   }
   .overlay{
    position: fixed;    
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999999999999 !important;
    background: rgba(0,0,0,0.4);
   }
   .form__error_text{
    color: crimson;
    font-size: 17px;
    margin: 0;
    padding: 0;
   }

   .error{
    color: crimson;
   }
   .error-input{
    border: 1px solid crimson;
    outline: 1px solid crimson;
   }
   .error-input::placeholder{
    color: crimson;
   }
   .active-header{
      color: #bebebe !important;
      filter: invert(0) !important;
    }
   .active-header-border{
    border: 1px solid rgb(190, 190, 190) !important;
   }
   .active-header-link{
     color: black !important;
   }
`;

export const SlideBtn = styled.button.attrs({
  type: "button",
})`
  padding: 0.8rem 1rem;
  background: ${({styledType}) => styledType === "danger" ? "crimson": "#fd0"};
  color: #000;
  font-weight: 600;
  font-size: 20px;
  border-radius: 10px;
`;
export const Button = styled(SlideBtn).attrs({
  type: "submit",
})`
  width: 100% !important;
  opacity: ${({styledType}) => styledType ? "0.3": "1"}
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  &::placeholder {
    font-size: 20px;
    font-weight: 700;
  }
  border: 1px solid #b9b6b6;
  border-radius: 10px;
  outline: 1px solid transparent;
  font-size: 20px;
`;
export const FormikField = styled(Field)`
  display: block;
  width: 100%;
  padding: 1rem;
  &::placeholder {
    font-size: 20px;
    font-weight: 700;
  }
  border: 1px solid #b9b6b6;
  border-radius: 10px;
  outline: 1px solid transparent;
  font-size: 20px;
`;
export const Like = styled.input.attrs({
  type: "checkbox"
})`
  appearance: none;
  width: 50px;
  height: 30px;
`
export const ErrorBox = styled.div`
  width: 100%;
  text-align: center;
`
export const ErrorTitle = styled.h3`
  font-size: 30px;
  color: crimson;
`