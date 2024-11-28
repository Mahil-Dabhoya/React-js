// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB2F8_OqFNCTf7B6-bXSWQD79eD6amn6s",
  authDomain: "pr11-firebase-d5fd4.firebaseapp.com",
  projectId: "pr11-firebase-d5fd4",
  storageBucket: "pr11-firebase-d5fd4.firebasestorage.app",
  messagingSenderId: "497348305356",
  appId: "1:497348305356:web:3f40118f88094edb833d69",
  measurementId: "G-4JRKEKJBN5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);