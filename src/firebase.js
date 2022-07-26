// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, orderBy, query } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJ8fddXP_ypxEgM84YBurOO0veeAuLXbU',
  authDomain: 'linkedin-clone-33c37.firebaseapp.com',
  projectId: 'linkedin-clone-33c37',
  storageBucket: 'linkedin-clone-33c37.appspot.com',
  messagingSenderId: '1051618529971',
  appId: '1:1051618529971:web:cd2b45d28d7d24e655d6c6',
  measurementId: 'G-TGWDC511FX',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, 'posts');
const q = query(colRef, orderBy('timestamp', 'desc'));

// const auth = firebase.auth();

export { db, colRef, q };
