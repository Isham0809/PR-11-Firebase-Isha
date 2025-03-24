// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmmgk2aOXcm_fMFj7Gou_xgV7Xhj5M_hQ",
  authDomain: "fir-crud-bc7cc.firebaseapp.com",
  projectId: "fir-crud-bc7cc",
  storageBucket: "fir-crud-bc7cc.firebasestorage.app",
  messagingSenderId: "901574670253",
  appId: "1:901574670253:web:3094ddf22cce0267a79324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)