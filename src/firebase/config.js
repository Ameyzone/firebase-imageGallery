// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyWq7kbI0JrjAHajcKxMEv-dDGDMIqKAU",
    authDomain: "react-firebase-collection.firebaseapp.com",
    projectId: "react-firebase-collection",
    storageBucket: "react-firebase-collection.appspot.com",
    messagingSenderId: "403703527992",
    appId: "1:403703527992:web:16788a1539ce643cd644cd"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage()
export const db = getFirestore()


