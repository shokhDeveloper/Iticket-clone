import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import {
  GlobalStyle,
  router,
  setBarDisplay,
  setSearchBox,
  setUserServer,
  useLoader,
} from "./Settings";
import { Loader } from "./Components";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const { loader, users, searchBox } = useSelector(({ Reducer }) => Reducer);
  const { openLoader } = useLoader();
  const dispatch = useDispatch();
  useEffect(() => {
    if (loader) {
      openLoader();
    }
  }, [loader]);
  const handleClick = (event) => {
    if (event.target.matches(".site_nav_bar__item")) {
      dispatch(setBarDisplay(true));
    } else {
      dispatch(setBarDisplay(false));
    }
    if (event.target.matches(".site_header__search")) {
      dispatch(setSearchBox(true));
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  const handleGetUsers = async () => {
      try{
        const request = await axios.get(process.env.REACT_APP_USER_SERVER)
        if(request.status === 200){
          const response = await request.data
          dispatch(setUserServer(response))
        }
      }catch(error){
        return error
      }
  }
  useEffect(() => {
    if (!users.length && searchBox) {
      handleGetUsers();
    }
  }, [users, searchBox]);
  return (
    <>
      {loader && <Loader />}
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}
export default App;
