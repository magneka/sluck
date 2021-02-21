//import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import * as firebase from "firebase/app";
import Firebase from "firebase";


//import FirebaseContext from './providers/FirebaseContext';

firebase.initializeApp({
    apiKey: "AIzaSyAz7jY9O7WopkNh26Enxe0O0PNUl_KJMqg",
    authDomain: "sluck-bg01.firebaseapp.com",
    projectId: "sluck-bg01",
    storageBucket: "sluck-bg01.appspot.com",
    messagingSenderId: "1076071535584",
    appId: "1:1076071535584:web:d1eb5b74c9f3a2fa5e1185"
  })
  
  export const _Firebase = Firebase
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  //export const analytics = firebase.analytics();
  