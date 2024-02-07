// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUf-oNcFGqbMZYk_-ycsCCOF62sme1-Gw",
  authDomain: "couchcraft-22f4d.firebaseapp.com",
  projectId: "couchcraft-22f4d",
  storageBucket: "couchcraft-22f4d.appspot.com",
  messagingSenderId: "293595402803",
  appId: "1:293595402803:web:46a02e1def9cd6b6a14946",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage();