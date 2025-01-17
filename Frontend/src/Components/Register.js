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

import SignupImg from "../assets/Images/signup.jpg";
import LogoImg from "../assets/Images/logo.png";


function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="lg" className="register-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="register-form">
            {/* <img 
              src={LogoImg}
              alt="Company Logo" 
              className="register-logo"
            /> */}
            <Typography variant="h4" className="register-title">
              Register your account
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                  />
                  <label htmlFor="raised-button-file">
                    <Button variant="contained" component="span">
                      Upload Image
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox required />}
                    label="I Agree to Terms & Conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
              >
                Sign Up
              </Button>
            </form>
            <Typography style={{ marginTop: '20px !important' }}>
              Already have an account? <Link to="/login">Sign in now</Link>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <img
            src={SignupImg}
            alt="Register"
            className="register-image"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
