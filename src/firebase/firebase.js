// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7wS2dPosSmQ3HUO6iwtJioYeIgLKJrbc",
  authDomain: "restaurant-contact-form.firebaseapp.com",
  projectId: "restaurant-contact-form",
  storageBucket: "restaurant-contact-form.appspot.com",
  messagingSenderId: "236157459317",
  appId: "1:236157459317:web:5e8da04961ec97ff0bd13c"
};

// Initialize Firebase
const FirebaseDb = initializeApp(firebaseConfig);

export default FirebaseDb;