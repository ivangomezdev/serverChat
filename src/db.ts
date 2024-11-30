// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, onValue } from 'firebase/database';
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIQmxnod_-ZnHpe-kKRqinyBS6y_Fx6N8",
  authDomain: "nodeverbs.firebaseapp.com",
  projectId: "nodeverbs",
  storageBucket: "nodeverbs.firebasestorage.app",
  messagingSenderId: "637914402707",
  appId: "1:637914402707:web:7e96b0ce8bfb4294bba266",
  measurementId: "G-ZK4LP0J078"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const dbFirestore = getFirestore(app)
console.log(dbFirestore);





