import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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
const db = getFirestore(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
