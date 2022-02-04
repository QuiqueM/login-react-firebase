// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQZ3e13Bc0sVXw1hAZ4AG8S9TZpp1h1Eg",
  authDomain: "react-login-firebase-4337d.firebaseapp.com",
  projectId: "react-login-firebase-4337d",
  storageBucket: "react-login-firebase-4337d.appspot.com",
  messagingSenderId: "193788786159",
  appId: "1:193788786159:web:e3d1bc12e92fe7166df21a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)