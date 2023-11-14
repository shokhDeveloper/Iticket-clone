import { useLocation, useNavigate } from "react-router";
import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../Settings/firebase/firebase.config";
import { Context, setAuthenticationType, setGoogleUser } from "../../Settings";
import { useContext, useEffect } from "react";

export const Modal = ({ title, setModal, links, children, context, modal }) => {
  const {modalLoginClassName, googleFirebaseUser, authenticationType} = useSelector(({Reducer}) => Reducer)
  const {signType} = useContext(Context)
  const dispatch = useDispatch();
  const path = signType  
    const handleGoogle = () => { 
      signInWithPopup(auth, googleAuthProvider).then(response => {
        console.log(response)
        if(response.user){ 
         const {user:{displayName, email, }} = response
         const user = {
           name: displayName.split(" ")[0],
           lastname: displayName.split(" ")[1],
           email,
           password: null
         }
         dispatch(setGoogleUser(user))
        }
      }) 
    }
    useEffect(() => {
      if(googleFirebaseUser?.email && !googleFirebaseUser.password){
        dispatch(setAuthenticationType(path))
      }
    },[googleFirebaseUser])
  return (
    <div className="modal__overlay overlay">
      <div className="modal">
        <div className={`modal__body ${`modal_`.concat(path).concat(path === "login" && modalLoginClassName ? "--active": "")} `} style={{height: path !== "login" && authenticationType === "register" ? "auto": "" }}>
          <div className="modal__header">
            <div className="modal_header__title_box">
              <h3>{title}</h3>
            </div>
            {links && (
              <div className="modal__links">
                {links?.wk && (
                  <button className="modal_links__wk border-transparent">
                    <svg
                      viewBox="0 0 26 15"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.3137 8.59184C20.8985 8.06742 21.0173 7.83411 21.3137 7.36535C21.3191 7.36 24.747 2.62314 25.1002 1.01672L25.1023 1.01565C25.2779 0.430234 25.1023 0 24.2536 0H21.4454C20.7304 0 20.4008 0.369231 20.2242 0.782341C20.2242 0.782341 18.7944 4.20495 16.7716 6.42355C16.1188 7.06462 15.817 7.2701 15.4606 7.2701C15.2851 7.2701 15.0122 7.06462 15.0122 6.4792V1.01565C15.0122 0.313579 14.812 0 14.2202 0H9.80441C9.35599 0 9.0895 0.327492 9.0895 0.632508C9.0895 1.29819 10.1009 1.45124 10.2058 3.32415V7.38783C10.2058 8.27826 10.0441 8.44201 9.68562 8.44201C8.73097 8.44201 6.41391 5.00549 5.0408 1.07237C4.76361 0.309298 4.49284 0.00107023 3.77258 0.00107023H0.963211C0.161605 0.00107023 0 0.370301 0 0.783411C0 1.51331 0.954649 5.14247 4.43933 9.93712C6.76174 13.2099 10.0324 14.9833 13.0076 14.9833C14.796 14.9833 15.0143 14.5894 15.0143 13.912C15.0143 10.7847 14.8527 10.4894 15.7485 10.4894C16.1637 10.4894 16.8787 10.6948 18.5482 12.2734C20.4565 14.1453 20.77 14.9833 21.8381 14.9833H24.6464C25.447 14.9833 25.8526 14.5894 25.6193 13.8124C25.0852 12.1782 21.4764 8.81659 21.3137 8.59184Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </button>
                )}
                {links?.faceBook && (
                  <button className="modal_links__faceBook border-transparent">
                    <svg
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5852 0.00404124L7.95106 0C4.99173 0 3.07927 1.87614 3.07927 4.77998V6.98386H0.43079C0.20193 6.98386 0.0166016 7.16127 0.0166016 7.38011V10.5733C0.0166016 10.7921 0.202141 10.9693 0.43079 10.9693H3.07927V19.0268C3.07927 19.2456 3.2646 19.4228 3.49346 19.4228H6.94898C7.17784 19.4228 7.36317 19.2454 7.36317 19.0268V10.9693H10.4599C10.6887 10.9693 10.8741 10.7921 10.8741 10.5733L10.8753 7.38011C10.8753 7.27503 10.8316 7.17441 10.754 7.10005C10.6765 7.02569 10.5708 6.98386 10.4609 6.98386H7.36317V5.1156C7.36317 4.21764 7.58696 3.76179 8.81029 3.76179L10.5848 3.76118C10.8134 3.76118 10.9987 3.58377 10.9987 3.36514V0.400082C10.9987 0.181654 10.8136 0.00444536 10.5852 0.00404124Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                )}
                {links?.google && (
                  <button onClick={handleGoogle} className="modal_links__google border-transparent">
                    <svg 
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.96885 19.9797C15.7215 19.9797 19.5429 15.9416 19.5429 10.2421C19.5429 9.58949 19.4751 9.08573 19.3808 8.5833H9.97018V12.0099H15.6285C15.3972 13.4654 13.9152 16.3072 9.97018 16.3072C6.57146 16.3072 3.79614 13.492 3.79614 10.0108C3.79614 6.52972 6.57014 3.71319 9.97018 3.71319C11.9148 3.71319 13.2067 4.54259 13.9418 5.24972L16.648 2.6525C14.9054 1.0216 12.6618 0.0419922 9.96885 0.0419922C4.46073 0.0419922 0 4.50272 0 10.0108C0 15.519 4.46073 19.9797 9.96885 19.9797Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
          {children}
        </div>
        <div className="modal__close">
          <button
            className="modal_close__btn border-transparent"
            onClick={() => {
              if(context){
                setModal(false)   
              }else{
                dispatch(setModal(false));
              }
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};
