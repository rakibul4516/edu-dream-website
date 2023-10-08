import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYFX2RkxgiQzHgJImKwua7aI-ysxRPzk8",
  authDomain: "edudream-ff341.firebaseapp.com",
  projectId: "edudream-ff341",
  storageBucket: "edudream-ff341.appspot.com",
  messagingSenderId: "646021740508",
  appId: "1:646021740508:web:5584eb783d436eda978119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;