import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDeIJFmij591O3I9LqxcMyYQ0pBNonyrM",
  authDomain: "nayara-shopping.firebaseapp.com",
  projectId: "nayara-shopping",
  storageBucket: "nayara-shopping.appspot.com",
  messagingSenderId: "240733330872",
  appId: "1:240733330872:web:9944097843893dbdea834d",
  measurementId: "G-KPE9BJTLCH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
