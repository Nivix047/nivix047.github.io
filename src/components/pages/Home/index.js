import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="home-top-section">
        {/* Top Box with the main header and image */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box className="home-image-box" />
          </Grid>
          <Grid item xs={12} md={7}>
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
        spacing={4} // Increased spacing between the items
        justifyContent="space-around" // Adjusted for even spacing around items
        className="home-bottom-box"
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box className="home-project-image nft-website" />
          <Typography variant="subtitle1" className="home-project-title">
            NFT Website
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box className="home-project-image knowledge-generator" />
          <Typography variant="subtitle1" className="home-project-title">
            Knowledge base generator
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box className="home-project-image chat-app" />
          <Typography variant="subtitle1" className="home-project-title">
            Chat App
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
