// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcAMYE_Ekc1dqKwZWHepMjVwoxmSZPojE",
  authDomain: "react-notes-project-8e174.firebaseapp.com",
  projectId: "react-notes-project-8e174",
  storageBucket: "react-notes-project-8e174.appspot.com",
  messagingSenderId: "235279811987",
  appId: "1:235279811987:web:20a2c921ee0d4f2361d466",
  measurementId: "G-SYPSWHYD9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
