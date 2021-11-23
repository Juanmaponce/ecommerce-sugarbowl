// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVOhM4TTksoLK4ikSPJXISytma-EdiRdE",
  authDomain: "juanma-ecomerce.firebaseapp.com",
  projectId: "juanma-ecomerce",
  storageBucket: "juanma-ecomerce.appspot.com",
  messagingSenderId: "33116582186",
  appId: "1:33116582186:web:cf7d0b9f748ac7c7e92e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);