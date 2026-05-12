// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjGur5bC32aIE0S1rJU2cLzXdsQ0sZvL4",
  authDomain: "simple-firebase-project-ccb52.firebaseapp.com",
  projectId: "simple-firebase-project-ccb52",
  storageBucket: "simple-firebase-project-ccb52.firebasestorage.app",
  messagingSenderId: "673704912573",
  appId: "1:673704912573:web:2d76f37f47858952c3b9d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
