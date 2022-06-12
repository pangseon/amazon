import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";







const firebaseConfig = {
    apiKey: "AIzaSyCyeLWK2phAW0SZ83NaWOcEmN3bUnS0NVs",
    authDomain: "fir-91e37.firebaseapp.com",
    projectId: "fir-91e37",
    storageBucket: "fir-91e37.appspot.com",
    messagingSenderId: "900717233430",
    appId: "1:900717233430:web:bb6a5a04b9cebbc23dfc37",
    measurementId: "G-YNDT36JMCR"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db , auth };