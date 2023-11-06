// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt9kabeQMF94NFsfPOV1jv8Pn_WuJwtTk",
  authDomain: "fourth-4f360.firebaseapp.com",
  projectId: "fourth-4f360",
  storageBucket: "fourth-4f360.appspot.com",
  messagingSenderId: "113706115091",
  appId: "1:113706115091:web:18ebca25a28119e5079fe6",
  measurementId: "G-JTBEYZEM6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
