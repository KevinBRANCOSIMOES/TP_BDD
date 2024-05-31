// Import the functions you need from the SDKs you need
/* eslint-disable*/
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3E-Qd65Zky1vv3a4Mf_cYrd4jv-ww0l4",
  authDomain: "tp-bdd-branco.firebaseapp.com",
  projectId: "tp-bdd-branco",
  storageBucket: "tp-bdd-branco.appspot.com",
  messagingSenderId: "882633754882",
  appId: "1:882633754882:web:5593a30b2ad23377e95a1b",
  measurementId: "G-4EZB9ZJ6G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;