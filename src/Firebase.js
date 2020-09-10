import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVN8M-he-mxBe09cBnvQp2HAIfhyaTNwY",
    authDomain: "clone-b40f1.firebaseapp.com",
    databaseURL: "https://clone-b40f1.firebaseio.com",
    projectId: "clone-b40f1",
    storageBucket: "clone-b40f1.appspot.com",
    messagingSenderId: "13415591602",
    appId: "1:13415591602:web:a0897fcdea6230a31ee3ab",
    measurementId: "G-S4Y0XM1K48"
  });

  
  const auth = firebase.auth();

  export {auth };