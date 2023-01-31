import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDDeIJFmij591O3I9LqxcMyYQ0pBNonyrM",
  authDomain: "nayara-shopping.firebaseapp.com",
  projectId: "nayara-shopping",
  storageBucket: "nayara-shopping.appspot.com",
  messagingSenderId: "240733330872",
  appId: "1:240733330872:web:9944097843893dbdea834d",
  measurementId: "G-KPE9BJTLCH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
