// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPgNqhfaiDnivswuZ-00PAOw8XPZJ-bg4",
  authDomain: "csi-vnrvjiet-94d0e.firebaseapp.com",
  projectId: "csi-vnrvjiet-94d0e",
  storageBucket: "csi-vnrvjiet-94d0e.appspot.com",
  messagingSenderId: "1072821572493",
  appId: "1:1072821572493:web:c39a6506e01fcf621463c4"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }