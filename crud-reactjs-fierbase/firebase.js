// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq0ULzSL5z2LgbkG_FTjYuzCownA94RNI",
  authDomain: "react-js-e56b3.firebaseapp.com",
  databaseURL: "https://react-js-e56b3-default-rtdb.firebaseio.com",
  projectId: "react-js-e56b3",
  storageBucket: "react-js-e56b3.firebasestorage.app",
  messagingSenderId: "1020777710117",
  appId: "1:1020777710117:web:eedd076fd5f8510316f5cc",
  measurementId: "G-NXS2XQVBRG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
