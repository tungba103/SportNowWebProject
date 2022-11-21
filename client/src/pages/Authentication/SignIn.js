// import { useState } from "react";

// function SignIn(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <div className="pt-10 sm:flex sm:justify-center">
//       <form
//         action=""
//         className="px-10 py-6 sm:py-10 mx-4 border border-sky-800 rounded-3xl bg-white sm:w-96"
//       >
//         <div className="flex justify-center text-4xl font-bold mb-10">
//           Sign in
//         </div>
//         <div className="flex justify-center items-center my-4">
//           <p className="font-bold">Username</p>
//           <input
//             type="text"
//             className="ml-4 p-2 rounded-3xl bg-orange-200"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-center items-center my-4">
//           <p className="font-bold">Password</p>
//           <input
//             type="text"
//             className="ml-4 p-2 rounded-3xl bg-orange-200"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-center items-center mt-6">
//           <div
//             onClick={() => {
//               props.onUser(username, password);
//             }}
//             className="text-xl font-bold text-white px-4 sm:px-8 sm:py-2 py-1 bg-orange-600 rounded-3xl cursor-pointer border border-orange-50 hover:border-orange-600"
//           >
//             Sign in
//           </div>
//         </div>
//         <p className="flex justify-center items-center mt-6 font-bold text-sm">
//           OR
//         </p>
//         <div className="flex justify-center items-center mt-2">
//           <div className="text-xl font-bold text-white px-4 sm:px-6 sm:py-1 py-1 bg-orange-600 rounded-3xl cursor-pointer border border-orange-50 hover:border-orange-600">
//             Sign up
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignIn;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="warning"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="warning"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="inherit">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" color="inherit">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}