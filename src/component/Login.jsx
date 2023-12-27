import React, { useState } from 'react';
import { Grid, Box, TextField, Button, InputAdornment, SvgIcon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import loginImage from "../images/loginLogo.png";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login, handle the response accordingly
        console.log('Login successful');
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // Check if either email or password is empty
  const isLoginDisabled = !email || !password;

  return (
    <div>
      <Grid container style={{ marginTop: "12px", marginRight: "40px" }}>
        {/* First Part */}
        <Grid item xs={12} md={6}>
          <Box className="logo">
            <img src={loginImage} alt="loginImage" />
          </Box>
        </Grid>

        {/* Second Part */}
        <Grid item xs={12} md={5}>
          <Box className="login_form">
            <Box>
              <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize: "30px" }}> Login</h1>
              <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "normal" }}>
                Enter your credentials to access your account
              </p>

              {/* Email Input */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon component={EmailIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Password Input */}
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon component={LockIcon} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Login Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                style={{ marginTop: "10px" }}
                disabled={isLoginDisabled}
              >
                Login
              </Button>

              <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "normal" }}>
                Don't Have an account? Register Here.
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
