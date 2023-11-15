import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Utils";
import kulturJSON from "../../Components/JSONS/kultur.json";
import popularJSON from "../../Components/JSONS/popular.json";
import Tamara from "../../Settings/assets/images/Tamara.jpg"
import Reklama from "../../Settings/assets/images/Reklama.jpg";
import Kamizyaki from "../../Settings/assets/images/Kamizyaki.jpg";
import Zamaj from "../../Settings/assets/images/Zajigay.jpg"
import Tarkan from "../../Settings/assets/images/Tarkan.jpg";
import WBS from "../../Settings/assets/images/WBS.jpg"
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
  likeTovars: getItem("application-like-tovars") ? JSON.parse(getItem("application-like-tovars")): [],
  mainAnimation: false,
  sliderCount: 0,
  barDisplay: false,
  searchBox: false,
  users: [],
  modalSign: false,
  modalLoginClassName: false,
  googleFirebaseUser: defaultUser,
  authenticationType: null,
  dataPage: null,
  resultTovarPage: null ,
  sliderArray: [Tamara, Reklama, Kamizyaki, Zamaj, Tarkan, WBS],
  profileData: null
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
    },
    setDataPage(state, action){
      state.dataPage = action.payload
    },
    setLike(state, action){
      if(state.likeTovars.length){
        if(!state.likeTovars.some(item => {
          if(item.id === action.payload.id && item.parentId === action.payload.parentId){
            return true
          }else{
            return false
          }
        })){
          state.likeTovars = [...state.likeTovars, action.payload]
          setItem("application-like-tovars", state.likeTovars)
        }else{
          state.likeTovars =  state.likeTovars
        } 
      }else{
        state.likeTovars = [...state.likeTovars, action.payload]
        setItem("application-like-tovars", state.likeTovars)
      }
    },
    setNotLike(state, action){
      try{
        let tovar = state.likeTovars.find(item => item.id ===  action.payload.id && item.parentId === action.payload.parentId)
        const idx = state.likeTovars.findIndex(item => tovar.id === item.id && tovar.parentId === item.parentId)
        let jsonLikeTovars = JSON.stringify(state.likeTovars)
        let jsonParseLikeTovars = JSON.parse(jsonLikeTovars)
        jsonParseLikeTovars.splice(idx, 1)
        state.likeTovars = jsonParseLikeTovars
        setItem("application-like-tovars", state.likeTovars)
      }catch(error){
          return error
      }
    },
    setTovarResultPage(state, action){
      let result = null;
      result = kulturJSON.find((item) => item.id === (action.payload-0));
      if (!result?.id) {
        result = popularJSON.find((item) => item.id === (action.payload-0));
      }
      state.resultTovarPage = [result]
    },
    setProfileData(state, action){
      state.profileData = action.payload
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
  setAuthenticationType,
  setDataPage,
  setLike,
  setNotLike,
  setTovarResultPage,
  setProfileData
} = slice.actions;
export const Reducer = slice.reducer;
