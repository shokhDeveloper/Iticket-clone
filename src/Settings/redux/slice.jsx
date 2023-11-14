import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Utils";
const defaultUser = {
  name: null,
  lastname: null,
  email: null,
  password: null
}
const initialState = {
  token: getItem("application-token") ? getItem("application-token") : null,
  user: getItem("application-user")
    ? JSON.parse(getItem("application-user"))
    : null,
  loader: getItem("application-loader") ? false : true,
  mainAnimation: false,
  sliderCount: 0,
  barDisplay: false,
  searchBox: false,
  users: [],
  modalSign: false,
  modalLoginClassName: false,
  googleFirebaseUser: defaultUser,
  authenticationType: null
};
export const slice = createSlice({
  name: "ITICKET",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      setItem("application-token", state.token);
    },
    setUser(state, action) {
      state.user = action.payload;
      setItem("application-user", JSON.stringify(state.user));
    },
    setOpenLoader(state) {
      state.loader = true;
      removeItem("application-loader");
    },
    setCloseLoader(state) {
      state.loader = false;
      setItem("application-loader", "loader-end");
    },
    setMainAnimation(state, action) {
      state.mainAnimation = action.payload;
    },
    setSliderCountInc(state) {
      if (5 > state.sliderCount) {
          state.sliderCount += 1;
      }else{
        state.sliderCount = 0
      }
    },
    setSliderCountDec(state){
        if(state.sliderCount > 1){
            state.sliderCount -= 1
        }else{
            state.sliderCount = 5
        }
    },
    setBarDisplay(state, action){
      state.barDisplay = action.payload
    },
    setSearchBox(state, action){
      state.searchBox = action.payload
    },
    setUserServer(state, action){
      state.users = action.payload
    },
    setModalSign(state, action){
      state.modalSign = action.payload
    },
    setModalLoginClassName(state, action){
     state.modalLoginClassName = action.payload 
    },
    setGoogleUser(state, action){
      state.googleFirebaseUser = action.payload
    },
    setAuthenticationType(state, action){
      state.authenticationType = action.payload
    }
  },
});
export const {
  setToken,
  setUser,
  setCloseLoader,
  setOpenLoader,
  setMainAnimation,
  setSliderCountInc,
  setSliderCountDec,
  setBarDisplay,
  setSearchBox,
  setUserServer,
  setModalSign,
  setModalLoginClassName,
  setGoogleUser,
  setAuthenticationType
} = slice.actions;
export const Reducer = slice.reducer;
