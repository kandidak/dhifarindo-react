
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUlIECKjA1suPCiIIVYm7Q5XAM3mcoiQ8",
  authDomain: "skripsi-a7a73.firebaseapp.com",
  projectId: "skripsi-a7a73",
  storageBucket: "skripsi-a7a73.appspot.com",
  messagingSenderId: "959100041696",
  appId: "1:959100041696:web:75f25ca8d3fb7490759385",
  measurementId: "G-VX8X82R6Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)