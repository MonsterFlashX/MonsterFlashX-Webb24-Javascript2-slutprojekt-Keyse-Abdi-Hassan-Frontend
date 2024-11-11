// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJkXdOKO1JijBLYkAVHPonRkbuTLP2Tg",
  authDomain: "e-shop-db-ae69a.firebaseapp.com",
  databaseURL: "https://e-shop-db-ae69a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-shop-db-ae69a",
  storageBucket: "e-shop-db-ae69a.firebasestorage.app",
  messagingSenderId: "481258358976",
  appId: "1:481258358976:web:05b3cd250390c89ae6c525",
  measurementId: "G-RJMT4C4R36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);