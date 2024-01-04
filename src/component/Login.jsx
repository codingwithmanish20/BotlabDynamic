import React, { useState } from 'react';
import { Grid, Box, TextField, Button, InputAdornment, SvgIcon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import loginImage from "../images/loginLogo.png";
import LoginHeader from './LoginHeader';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useAuth} from "../context/AuthContext";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authenticate } = useAuth();


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const success = await authenticate(email, password);

    if (success) {
      navigate("/");
    } else {
      setLoading(false);
      alert("Invalid credentials. Please check!");
    }
  };

  // Check if either email or password is empty
  const isLoginDisabled = !email || !password;

  return (
    
    <>
        <LoginHeader/>
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
                 {loading ? < CircularProgress  style = {{color:"white"}} />  : 'Login'}
              </Button>

              <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "normal" }}>
                Don't Have an account? Register Here.
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
