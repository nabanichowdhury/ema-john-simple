// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkDffX0BZFI1ieeE_FGqskRPaAHfNK7EQ",
  authDomain: "ema-john-simple-6b7df.firebaseapp.com",
  projectId: "ema-john-simple-6b7df",
  storageBucket: "ema-john-simple-6b7df.appspot.com",
  messagingSenderId: "921418730946",
  appId: "1:921418730946:web:dc317de492f77f09685a5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
