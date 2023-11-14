import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCxdGQREUB7NKQM4iEQBxuK6fXBD-BKMsU",
  authDomain: "iticket-clone.firebaseapp.com",
  projectId: "iticket-clone",
  storageBucket: "iticket-clone.appspot.com",
  messagingSenderId: "291845317842",
  appId: "1:291845317842:web:05019b0e21837f6436390b",
  measurementId: "G-E5SV4E8ZYL"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()