import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home-container">
      {/* Top Box with the main header and image */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box className="home-image-box" />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" className="home-header-text">
            Crafting Web Magic with Full-stack Wizardry, AI Adventures, and NFT
            Fun.
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom Box with three smaller images */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className="home-bottom-box"
      >
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Box className="home-project-image nft-website" />
          <Typography variant="subtitle1" gutterBottom>
            NFT Website
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Box className="home-project-image knowledge-generator" />
          <Typography variant="subtitle1" gutterBottom>
            Knowledge base generator
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Box className="home-project-image chat-app" />
          <Typography variant="subtitle1" gutterBottom>
            Chat App
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
