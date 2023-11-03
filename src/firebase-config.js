// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXPoOd_dw2PmggDBT3ygnIAxvqIzLrP80",
  authDomain: "chat-app-behindev.firebaseapp.com",
  projectId: "chat-app-behindev",
  storageBucket: "chat-app-behindev.appspot.com",
  messagingSenderId: "705557204285",
  appId: "1:705557204285:web:d7e68da755f72c0fd50954",
  measurementId: "G-843NZPN9EQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
