// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPTTMg247Uk847KrUg3DJAEC8B_kYgrLM",
  authDomain: "react-socialmedia-d970d.firebaseapp.com",
  projectId: "react-socialmedia-d970d",
  storageBucket: "react-socialmedia-d970d.appspot.com",
  messagingSenderId: "1032749168238",
  appId: "1:1032749168238:web:fe1738164c4e441227587f",
  measurementId: "G-S92XX3C60V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)