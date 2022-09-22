// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDR7MT0ZC4qeyzUzUBpz-nSS2lT3z_1TMs",
  authDomain: "ecomerrece.firebaseapp.com",
  projectId: "ecomerrece",
  storageBucket: "ecomerrece.appspot.com",
  messagingSenderId: "739608616188",
  appId: "1:739608616188:web:1730c92b53f3fe814c0b79",
  measurementId: "G-RVXZE52632",
};


const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export {db , auth};