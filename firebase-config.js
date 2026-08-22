// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDim3ES_wbCVkhduvjLAbg7Z7Ze-lcWa00",
  authDomain: "monitoring-stock-b86d1.firebaseapp.com",
  projectId: "monitoring-stock-b86d1",
  storageBucket: "monitoring-stock-b86d1.firebasestorage.app",
  messagingSenderId: "839029888964",
  appId: "1:839029888964:web:5e2659ac5c1a2115b2b691",
  measurementId: "G-9WX9C59P7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
