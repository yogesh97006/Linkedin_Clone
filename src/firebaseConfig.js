// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf9S2QPcGj72rWDGGL-4b1hX-GdB6dpSo",
  authDomain: "linkedin-clone-eab9f.firebaseapp.com",
  projectId: "linkedin-clone-eab9f",
  storageBucket: "linkedin-clone-eab9f.appspot.com",
  messagingSenderId: "604824727947",
  appId: "1:604824727947:web:7238de9ee01b4b3cf67f8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app)