// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSxw5_2m8a0xlyPwOeJj4k9RFEJ0MWtSg",
  authDomain: "fourinone-c5f2a.firebaseapp.com",
  projectId: "fourinone-c5f2a",
  storageBucket: "fourinone-c5f2a.appspot.com",
  messagingSenderId: "895605259327",
  appId: "1:895605259327:web:a56347f8d98ec70b614c8a",
  measurementId: "G-YDM4MCXNXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);