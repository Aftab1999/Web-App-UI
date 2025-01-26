import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import '../assets/Css/Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <>
            <Box className="footer_section layout_padding">
                <Container>
                    <Box className="location_main">
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <Box className="location_text">
                                    {/* <img src="images/map-icon.png" alt="Map Icon" /> */}

                                    <LocationOnIcon />
                                    <Typography component="span" className="padding_left_10">
                                        <a href="#">Location</a>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box className="location_text location_icon-container center">
                                    {/* <img src="images/call-icon.png" alt="Call Icon" /> */}
                                    <PhoneIcon />
                                    <Typography component="span" className="padding_left_10">
                                        <a href="#">Call ; 01 1234567890</a>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box className="location_text right">
                                    {/* <img src="images/mail-icon.png" alt="Mail Icon" /> */}
                                    <EmailIcon />
                                    <Typography component="span" className="padding_left_10">
                                        <a href="#">demo@gmail.com</a>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="footer_section_2">
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={4}>
                                <Typography variant="h2" className="footer_taital">
                                    About
                                </Typography>
                                <Typography className="footer_text">
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority havThere are many variations of passages of
                                    Lorem Ipsum available, but the majority hav
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Typography variant="h2" className="footer_taital">
                                    Services Link
                                </Typography>
                                <Typography className="footer_text">
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority havThere are many variations of passages of
                                    Lorem Ipsum available, but the majority hav
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Typography variant="h2" className="footer_taital">
                                    Social Links
                                </Typography>

                                {/* <TextField
                                    className="Enter_text"
                                    placeholder="Enter Your Email"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />

                                <Box className="subscribe_bt">
                                    <Button href="#" fullWidth>
                                        Subscribe
                                    </Button>
                                </Box> */}

                                <Box className="social_icon">
                                    <ul>
                                        <li>
                                            <a href="#"><FacebookOutlinedIcon /></a>
                                        </li>
                                        <li>
                                            <a href="#"> <TwitterIcon /> </a>
                                        </li>
                                        <li>
                                            <a href="#"><LinkedInIcon /></a>
                                        </li>
                                        <li>
                                            <a href="#"> <InstagramIcon /> </a>
                                        </li>
                                        <li>
                                            <a href="#"> <YouTubeIcon /> </a>
                                        </li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box className="copyright_section">
                <Container>
                    <Typography className="copyright_text">
                        Copyright 2025 All Rights Reserved.<a href="https://marketmindsadvisory.com/" target="_blank"> Market Minds Advisory</a>
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

