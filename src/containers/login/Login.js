import {useContext} from 'react'
import FirebaseContext from "../../providers/FirebaseContext";

export const Login = () => {
    const [firebase, auth, firestore] = useContext(FirebaseContext);    
    
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    const signInWithGoogle = () => {
        try {
            let provider = new firebase.auth.GoogleAuthProvider();
            //var provider = new firebase.auth.GithubAuthProvider();
            auth.signInWithPopup(provider)
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

                    console.log(error)
                    // ...
                });
                    
        } catch (error) {
            console.log(error)
        }
    }

    return (
  
        <>            
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Fanden så vanskelig dette skulle være da...!</p>
        </>

    )
}