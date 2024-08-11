// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-aa9cb.firebaseapp.com",
  projectId: "reactchat-aa9cb",
  storageBucket: "reactchat-aa9cb.appspot.com",
  messagingSenderId: "1073991307063",
  appId: "1:1073991307063:web:66a2145d08cd5b229414b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const userAuth = getAuth() //authentication
export const db = getFirestore() //db
export const storage = getStorage() //Storage