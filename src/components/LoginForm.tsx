import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { auth } from '../firebaseSetup';

const provider = new GoogleAuthProvider();

function LoginForm() {
  const signInWithGoogle = async () => {
    signInWithPopup(auth!, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential?.accessToken;
        // The signed-in user info.
        const { user: googleUser } = result;
        console.warn(JSON.stringify(googleUser));
        console.warn(JSON.stringify(token));

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .then(() => {
        console.log('The user has been created');
      })
      .catch((err: any) => {
        console.log('The user already exists');
        // Handle Errors here.
        const errorCode = err.error;
        const errMessage = err.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        console.warn(JSON.stringify(errorCode));
        console.warn(JSON.stringify(errMessage));
      });
  };
  return <GoogleButton onClick={signInWithGoogle} />;
}

export default LoginForm;
