import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/Css/Testimonial.css';
import QuickIcon from "../assets/Images/quick-icon.png"
import QuickIcon1 from "../assets/Images/quick-icon1.png"

const TestimonialBox = ({ name, text }) => (
  <Box className="testimonial_box">
    <Box className="jonimo_taital_main">
      <Typography variant="h4" className="jonimo_text">
        {name}
      </Typography>
      <Box className="quick_icon">
        <img src={QuickIcon} alt="Quick Icon" />
      </Box>
      <Box className="quick_icon_1">
        <img src={QuickIcon1} alt="Quick Icon 1" />
      </Box>
    </Box>
    <Typography variant="body1" className="dummy_text">
      {text}
    </Typography>
  </Box>
);

const TestimonialSlide = () => (
  <Container>
    <Typography variant="h3" className="testimonial_taital">
      Testimonial
    </Typography>
    <Typography variant="body1" className="testimonial_text">
      majority have suffered alteration in some form, by injected humour, or
    </Typography>
    <Box className="testimonial_section_2">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TestimonialBox
            name="Jonimo"
            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TestimonialBox
            name="Mark Duo"
            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there"
          />
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default function TestimonialSection() {
  return (
    <Box className="testimonial_section">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            width: 20,
            height: 20,
            borderRadius: '100px',
            backgroundColor: '#0a0a0a',
            display: 'inline-block',
            margin: '0 8px'
          };
          const style = isSelected
            ? { ...defStyle, width: 50, backgroundColor: '#ff3366' }
            : defStyle;
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <TestimonialSlide />
        <TestimonialSlide />
        <TestimonialSlide />
        <TestimonialSlide />
      </Carousel>
    </Box>
  );
}

