// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8683f.firebaseapp.com",
  projectId: "mern-blog-8683f",
  storageBucket: "mern-blog-8683f.appspot.com",
  messagingSenderId: "314556727259",
  appId: "1:314556727259:web:bed2734dd209f34ca171fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 