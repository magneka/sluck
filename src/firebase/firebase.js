import app from 'firebase/app';
import firebase from 'firebase'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAz7jY9O7WopkNh26Enxe0O0PNUl_KJMqg",
    authDomain: "sluck-bg01.firebaseapp.com",
    projectId: "sluck-bg01",
    storageBucket: "sluck-bg01.appspot.com",
    messagingSenderId: "1076071535584",
    appId: "1:1076071535584:web:d1eb5b74c9f3a2fa5e1185"

  /*apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  */
};

class FirebaseRepository {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    this.db = firebase.firestore();
    //this.functions = app.functions();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  getCollection = (collectionName, fOK,  fErr) =>  {

    var docRef = this.db
        .collection(collectionName, fOK, fErr)
        .get(fOK)
        .then(fErr)
          
  }

  doGoogleSigninWithPopup = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
  }



}
export default FirebaseRepository;