// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCzVVSb9D-LGf2lgfeVQcozuOInqlZOn0",
  authDomain: "java23-ajs-slutprojekt-a81e0.firebaseapp.com",
  databaseURL: "https://java23-ajs-slutprojekt-a81e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "java23-ajs-slutprojekt-a81e0",
  storageBucket: "java23-ajs-slutprojekt-a81e0.appspot.com",
  messagingSenderId: "855431396420",
  appId: "1:855431396420:web:cd950999af0c35e45f1011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const assignmentsRef = ref(db, "/assignments");