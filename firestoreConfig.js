import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    
    "projectId": "wk8lab",
    "appId": "1:1026375637269:web:abd06f15df83790630711c",
    "storageBucket": "wk8lab.firebasestorage.app",
    "apiKey": "AIzaSyBetmT5dYnjIagEEjOywbXTYxinI5JI0DY",
    "authDomain": "wk8lab.firebaseapp.com",
    "messagingSenderId": "1026375637269",
    "projectNumber": "1026375637269",
    "version": "2"
  }


const app = initializeApp(firebaseConfig);    
export const db = getFirestore(app);