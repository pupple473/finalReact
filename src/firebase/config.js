// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHX5-8A5bGRQC4AnatOIKtC2t_vBN2EW4",
  authDomain: "reactjsfinal-c5946.firebaseapp.com",
  projectId: "reactjsfinal-c5946",
  storageBucket: "reactjsfinal-c5946.firebasestorage.app",
  messagingSenderId: "1014464746252",
  appId: "1:1014464746252:web:f85058600e10799444af29",
  measurementId: "G-4RKBZEZ6P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);