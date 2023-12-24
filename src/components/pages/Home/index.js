import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home-container">
      {/* Top Box with the main header and image */}
      <Box className="home-top-section">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className="home-image-box" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" className="home-header-text">
              Crafting Web Magic with Full-stack Wizardry, AI Adventures, and
              NFT Fun.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Box with three smaller images */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        className="home-bottom-box"
      >
        <Grid item xs={4}>
          <Box
            className="home-project-image nft-website"
            id="nft-website-typography"
          >
            <Typography variant="subtitle1" className="home-project-title">
              NFT Website
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className="home-project-image knowledge-generator">
            <Typography variant="subtitle1" className="home-project-title">
              Knowledge base generator
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className="home-project-image chat-app">
            <Typography variant="subtitle1" className="home-project-title">
              Chat App
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
