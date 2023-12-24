// src/components/pages/Home/index.js
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home-container">
      {/* Top Box with 20-80 split */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={2}>
          {/* Left Side - Portrait as a background image */}
          <Box className="home-image-box" />
        </Grid>
        <Grid item xs={12} sm={8} md={10}>
          {/* Right Side - Header */}
          <Box className="home-header-box">
            <Typography variant="h3">
              Crafting Web Magic with Full-stack Wizardry, AI Adventures, and
              NFT Fun.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Box with three images */}
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        className="home-bottom-box"
      >
        {/* NFT Website */}
        <Grid item xs={12} sm={4}>
          <Paper className="home-image-paper nft-website">
            <Typography variant="subtitle1">NFT Website</Typography>
          </Paper>
        </Grid>

        {/* Knowledge Base Generator */}
        <Grid item xs={12} sm={4}>
          <Paper className="home-image-paper knowledge-generator">
            <Typography variant="subtitle1">
              Knowledge base generator
            </Typography>
          </Paper>
        </Grid>

        {/* Chat App */}
        <Grid item xs={12} sm={4}>
          <Paper className="home-image-paper chat-app">
            <Typography variant="subtitle1">Chat App</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
