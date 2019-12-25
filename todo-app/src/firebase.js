import  firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBABgMrb6Bqt2Tboq9dD_YzzwrpC-kvE0I",
    authDomain: "test-214df.firebaseapp.com",
    databaseURL: "https://test-214df.firebaseio.com",
    projectId: "test-214df",
    storageBucket: "test-214df.appspot.com",
    messagingSenderId: "962636300087",
    appId: "1:962636300087:web:1d9d147c3a92219832e4b2",
    measurementId: "G-26XVQRNG85"
  };

  firebase.initializeApp(firebaseConfig);
  const firestore = new firebase.firestore();


  export {firestore}