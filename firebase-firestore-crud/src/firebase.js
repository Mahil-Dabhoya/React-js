// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRT9HlHxjvltAZNIqXqzsjPfkQRyJ6okU",
  authDomain: "fir-fierstore-crud.firebaseapp.com",
  projectId: "fir-fierstore-crud",
  storageBucket: "fir-fierstore-crud.firebasestorage.app",
  messagingSenderId: "579559852783",
  appId: "1:579559852783:web:8c0c81b1da16e59f8ee91a",
  measurementId: "G-0G7Q470H77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
