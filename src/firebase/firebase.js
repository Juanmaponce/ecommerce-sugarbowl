// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMdRQmrtGxFYR53wET15Ke4U4MQCxAybU",
  authDomain: "sugar-bowl-ecommerce.firebaseapp.com",
  projectId: "sugar-bowl-ecommerce",
  storageBucket: "sugar-bowl-ecommerce.appspot.com",
  messagingSenderId: "434829869876",
  appId: "1:434829869876:web:12cd3379cf503a206c5b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);