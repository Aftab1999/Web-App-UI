import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Checkbox,
  FormControlLabel
} from '@mui/material';

import '../assets/Css/Login.css';

import loginImg from "../assets/Images/Login.png";

import LogoImg from "../assets/Images/logo.png";



function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="lg" className="login-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <img
            src={loginImg}
            alt="Sign Up"
            className="login-image"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="login-form">

            <Typography variant="h4" className="login-title">
              Sign in to your account
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                name="email"
                type="email"
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                name="password"
                type="password"
                required
              />
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Link to="/forgot-password" style={{ color: '#1976d2' }}>
                    Forgot your password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
              >
                Sign In
              </Button>
            </form>
            <Typography style={{ marginTop: '20px' }} align="center">
              Don't have an account? <Link to="/register" style={{ color: '#1976d2' }}>Register now</Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;

