import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCL71xk0g0C867v2zlbjjzoZm1IqKmgzI",
    authDomain: "challenge-1e914.firebaseapp.com",
    databaseURL: "https://challenge-1e914.firebaseio.com",
    projectId: "challenge-1e914",
    storageBucket: "challenge-1e914.appspot.com",
    messagingSenderId: "78707985666",
    appId: "1:78707985666:web:d163ab522f2a14be1a861b",
    measurementId: "G-TJERCBVT0D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };