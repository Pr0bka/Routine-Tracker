/* eslint-disable implicit-arrow-linebreak */
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { registerUser } from '../queries/user';
import { auth } from '../firebaseSetup';

function SignUp() {
  const [name, setName] = useState<string>();
  return (
    <Paper>
      <Box>
        <Typography align='left'>Type in your name</Typography>
        <TextField
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button
          onClick={() =>
            registerUser(
              auth?.currentUser?.displayName,
              auth?.currentUser?.email!,
            )
          }
        >
          Sign up
        </Button>
      </Box>
    </Paper>
  );
}

export default SignUp;
