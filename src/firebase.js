

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmOfYhIHLa0_oY8tJohj1oCpR3A9uoNjw",
  authDomain: "e-clo-5eb43.firebaseapp.com",
  projectId: "e-clo-5eb43",
  storageBucket: "e-clo-5eb43.appspot.com",
  messagingSenderId: "185508794989",
  appId: "1:185508794989:web:35fc965edcf3b88158e564",
  measurementId: "G-JMWVCXRCHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();