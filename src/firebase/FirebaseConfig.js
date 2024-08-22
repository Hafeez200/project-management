import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7R_D_5i61kdJVr1V4y-2d-qHy2ZO7gqE",
  authDomain: "project-management-syste-5c909.firebaseapp.com",
  projectId: "project-management-syste-5c909",
  storageBucket: "project-management-syste-5c909.appspot.com",
  messagingSenderId: "437058325272",
  appId: "1:437058325272:web:569ff9c9e4f83402516c6d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
