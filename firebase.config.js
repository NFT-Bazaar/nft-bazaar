// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNwD81RH7z7vQIfm7pa3hJ0gktyDIK18g",
  authDomain: "nft-bazaar-7a236.firebaseapp.com",
  databaseURL: "https://nft-bazaar-7a236-default-rtdb.firebaseio.com/",
  projectId: "nft-bazaar-7a236",
  storageBucket: "nft-bazaar-7a236.appspot.com",
  messagingSenderId: "95696347185",
  appId: "1:95696347185:web:72f7fe44be1442010f7510",
  // measurementId: "G-12345"                        // Analytics
};

// Initialize Firebase
const da = initializeApp(firebaseConfig);

export  const db = getDatabase(da);
