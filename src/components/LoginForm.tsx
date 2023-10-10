import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Box, Stack, Typography } from '@mui/material';
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
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Stack
        spacing={5}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography fontSize={150} fontFamily='Zalupa'>
          Routine Tracker
        </Typography>
        <GoogleButton onClick={signInWithGoogle} />
      </Stack>
    </Box>
  );
}

export default LoginForm;
