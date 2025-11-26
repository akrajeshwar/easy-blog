// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } 
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Your Firebase config (paste your config)
const firebaseConfig = {
    apiKey: "AIzaSyCy8Ea1fKVorLQ0hVln_ELCVs3J1QOlOlw",
    authDomain: "easyblog-c851b.firebaseapp.com",
    projectId: "easyblog-c851b",
    storageBucket: "easyblog-c851b.firebasestorage.app",
    messagingSenderId: "616036452082",
    appId: "1:616036452082:web:1a4a6f2348924a1680b26b"
};

// Initialize Firebase + Firestore
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc, getDocs, doc, getDoc };
