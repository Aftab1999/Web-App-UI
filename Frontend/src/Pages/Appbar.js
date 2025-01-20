import React from 'react';
import { Grid, Button, Container, Stack } from '@mui/material';
import "../assets/Css/Home.css";
import Mdlogo from "../assets/Images/MM_Logo.webp"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">

            <Grid container className="home-top-header">
                <Grid item xs={12} md={6}>
                    <Stack direction='row' spacing={2}>
                        <img
                            src={Mdlogo || "/placeholder.svg"}
                            alt="Market Minds Logo"
                            style={{ height: 40 }}
                        />
                        <Stack>
                            <a className="company-name"> Market Minds Advisory </a>
                            <a className="company-tagline"> Power Behind Market Leaders </a>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} container justifyContent="flex-end" alignItems="center">
                    <Button variant="text" className="auth-button" LinkComponent={Link} to='/login'>
                        Sign In
                    </Button>
                    <Button variant="contained" className="auth-button signup-btn" LinkComponent={Link} to='/register'>
                        Sign Up
                    </Button>
                </Grid>
            </Grid>

            {/* <Container> */}

            <Grid container className="content-section" justifyContent="center">
                <Grid item xs={12} md={10} textAlign="center">
                    <h1 className="main-heading">
                        Boost your business growth with better market insights for smarter strategies and decisions.
                    </h1>
                    <Button
                        variant="contained"
                        className="trial-button"
                    >
                        Request Free Trial
                    </Button>
                </Grid>
            </Grid>

            {/* </Container> */}


        </div>
    );
};

export default Home;

