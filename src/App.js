import logo from './logo.svg';
import './App.css';
import MainLayout from './layout/MainLayout';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import FirebaseContext from './providers/FirebaseContext';

//import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAz7jY9O7WopkNh26Enxe0O0PNUl_KJMqg",
  authDomain: "sluck-bg01.firebaseapp.com",
  projectId: "sluck-bg01",
  storageBucket: "sluck-bg01.appspot.com",
  messagingSenderId: "1076071535584",
  appId: "1:1076071535584:web:d1eb5b74c9f3a2fa5e1185"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  var user = firebase.auth().currentUser;

  console.log(user)

  return (
    <div className="App">
      
      <FirebaseContext.Provider value={[firebase, auth, firestore]}>
        <MainLayout />
      </FirebaseContext.Provider>

    </div>
  );
}

export default App;

/*
<FirebaseContext.Provider auth={auth} firestore={firestore}>
  <MainLayout />
</FirebaseContext.Provider>
*/
