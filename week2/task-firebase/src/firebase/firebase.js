import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBLsn_Db7n3u97bB1lwToWUsSiZjEK3JdQ",
    authDomain: "task-manager-65c91.firebaseapp.com",
    projectId: "task-manager-65c91",
    storageBucket: "task-manager-65c91.appspot.com",
    messagingSenderId: "899983875785",
    appId: "1:899983875785:web:68d076b8c732d075dfb718",
    measurementId: "G-8S3DQL8EWZ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };