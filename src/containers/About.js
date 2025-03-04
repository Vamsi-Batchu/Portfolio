import React, { useState } from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import AboutMe from '../assets/About/AboutMe.svg'

// const projects = [
//   {
//     title: "Website Designing",
//     description:
//       "We help e-commerce brands navigate the ever-changing landscape of digital marketing with best-in-class creative, personalized paid media strategies.",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd69b2fb60396a8afc337a0a9ba9000c6aa9c99abf5f42774488855eb28ef1d",
//     link: "/website-designing",
//   },
//   {
//     title: "UXUI - Graphic Designing",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/60dd0ef7ef425cb6ccf1c990c8f6d3a58638ae2b6690a7c9bc94f7192e7875ee",
//     link: "/uxui-graphic-designing",
//   },
//   {
//     title: "Web Development",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/591e775bd4683e3ab1442d9d827bbb482cb54c797b116156668f2f0f43d61f58",
//     link: "/web-development",
//   },
// ];

export const About = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  // };

  return (
    <Box sx={{ backgroundColor: "black", py: 10, px: { xs: 2, md: 8 }, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Box component="img" src={AboutMe} alt="Profile" sx={{ width: "100%", maxWidth: 400 }} />
        </Grid>
        <Grid item xs={12} md={7} sx={{ position: "relative", p: 5 }}>
          {/* Half Border */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "50%",
              height: "50%",
              borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
              borderRight: "2px solid rgba(255, 255, 255, 0.2)",
              mb:'-3rem'
            }}
          />
          {/* About Text */}
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              bottom: "95%",
              right: "-2%",
              color: "white",
              opacity:'30%',
              fontWeight: 700,
              transform: "rotate(-90deg)",
              transformOrigin: "bottom right",
            }}
          >
            About Me
          </Typography>
          {/* Content */}
          <Typography variant="h3" sx={{ color: "white", textAlign: "center", fontWeight: 700 }}> Bit about me</Typography>
          <Typography variant="body1" sx={{ color: "white", mt: 2, fontSize: 20, lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Maecenas eget condimentum velit, sit amet feugiat lectus.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
            <Button variant="contained" sx={{ background: "#ea5f5f", color: "white", px: 3, py: 1, fontSize: 16 }}>
              Download CV
            </Button>
            <Button variant="contained" sx={{ background: "#ff2b51", color: "white", px: 3, py: 1, fontSize: 16 }}>
              Know More
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* <Card sx={{ width: "80vw", height: "80vh", position: "relative" }}>
        <CardMedia component="img" height="100%" image={projects[currentIndex].image} alt={projects[currentIndex].title} />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>{projects[currentIndex].title}</Typography>
          {projects[currentIndex].description && <Typography variant="body2">{projects[currentIndex].description}</Typography>}
        </CardContent>
      </Card> */}
    </Box>
  );
};

export default About;
