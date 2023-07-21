// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd7W5m5pkhWtL_3L9rrrIZyxOh9lRjF0I",
  authDomain: "library-29264.firebaseapp.com",
  projectId: "library-29264",
  storageBucket: "library-29264.appspot.com",
  messagingSenderId: "389785216740",
  appId: "1:389785216740:web:93aa120f1ef00249f2eef1",
  measurementId: "G-YN6EX8E7P3"
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
