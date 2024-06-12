import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj0LXJ8hBokEbYo6NgRCx6vN0V386s328",
  authDomain: "silver-archery-350714.firebaseapp.com",
  projectId: "silver-archery-350714",
  storageBucket: "silver-archery-350714.appspot.com",
  messagingSenderId: "932368739430",
  appId: "1:932368739430:web:dcb8800b5580e6d7b5d1a7",
  measurementId: "G-6SF26G8YCC"
};

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(profilePic);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
