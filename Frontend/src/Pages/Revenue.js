import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import "../assets/Css/Revenue.css";
import Revenueimg from "../assets/Images/revenue-img.png";

export default function AboutSection() {
    return (
        <Box className="about_section layout_padding">
            <Container>
                <Typography variant="h4" className="about_taital about-title">
                    Your Revenue Mix is Changing...
                </Typography>

                <Box className="about_section_2">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box className="about_image">
                                <img src={Revenueimg} alt="Revenue" width="100%" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box className="about_taital_main">
                                <Typography variant="body1" className="lorem_text">
                                    More than 60% of future revenues of every B2B Company will
                                    come from New Technologies, Use cases, Clients, Markets, and
                                    Partnerships. MnM's KnowledgeStore gives you meaningful
                                    insights along your transformation journey.
                                </Typography>
                                <Box className="read_bt">
                                    <a href="#" className="read-more-button">
                                        subscribe now
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
