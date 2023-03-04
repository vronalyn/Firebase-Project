// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_bmJ7RXFSoAQzwHj-QwyRoQDZtH5klnk",
  authDomain: "fir-project1-61afa.firebaseapp.com",
  projectId: "fir-project1-61afa",
  storageBucket: "fir-project1-61afa.appspot.com",
  messagingSenderId: "210439760353",
  appId: "1:210439760353:web:91000088744a67811ecaa0",
  measurementId: "G-29QTJ8L3G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)