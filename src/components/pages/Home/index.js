import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home-container" sx={{ border: "2px solid black" }}>
      {/* Top Box with 20-80 split */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={2} sx={{ border: "2px solid black" }}>
          {/* Left Side - Image */}
          <Box className="home-image-box">
            <img
              src="path-to-your-image.jpg"
              alt="Your Portrait"
              className="home-portrait"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={10} sx={{ border: "2px solid black" }}>
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
        sx={{ border: "2px solid black" }}
      >
        <Grid item sx={{ border: "2px solid black" }}>
          <Paper className="home-image-paper">
            <img
              src="path-to-nft-website.jpg"
              alt="NFT Website"
              className="home-image"
            />
            <Typography variant="subtitle1">NFT Website</Typography>
          </Paper>
        </Grid>
        <Grid item sx={{ border: "2px solid black" }}>
          <Paper className="home-image-paper">
            <img
              src="path-to-knowledge-generator.jpg"
              alt="Knowledge base generator"
              className="home-image"
            />
            <Typography variant="subtitle1">
              Knowledge base generator
            </Typography>
          </Paper>
        </Grid>
        <Grid item sx={{ border: "2px solid black" }}>
          <Paper className="home-image-paper">
            <img
              src="path-to-chat-app.jpg"
              alt="Chat App"
              className="home-image"
            />
            <Typography variant="subtitle1">Chat App</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
