import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Home.css"; // Ensure this path is correct

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto", // 'mx' is shorthand for margin-left and margin-right
        color: "white",
        pt: "5vh", // paddingTop
      }}
    >
      {/* Top Box with the main header and image */}
      <Box
        sx={{
          borderTop: "2px solid white",
          borderBottom: "2px solid white",
          mt: { xs: 0, sm: "5vh", md: "10vh" }, // Responsive margin-top
          mb: "5vh", // marginBottom
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className="home-image-box" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" sx={{ p: 2 }}>
              Crafting Web Magic with Full-stack Wizardry, AI Adventures, and
              NFT Fun.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Box with three smaller images */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: "10vh" }}>
        {/* NFT Website */}
        <Grid item xs={4}>
          <a
            href="https://sacred-genesis.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box className="home-project-image nft-website">
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  color: "white",
                  textAlign: "center",
                  position: "absolute",
                  bottom: "-20px",
                  width: "100%",
                }}
              >
                NFT Website
              </Typography>
            </Box>
          </a>
        </Grid>

        {/* Knowledge Base Generator */}
        <Grid item xs={4}>
          <a
            href="https://github.com/Nivix047/kb_generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box className="home-project-image knowledge-generator">
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  color: "white",
                  textAlign: "center",
                  position: "absolute",
                  bottom: "-40px",
                  width: "100%",
                }}
              >
                Knowledge Base Generator
              </Typography>
            </Box>
          </a>
        </Grid>

        {/* Chat App */}
        <Grid item xs={4}>
          <a
            href="https://github.com/Nivix047/django-dm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box className="home-project-image chat-app">
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  color: "white",
                  textAlign: "center",
                  position: "absolute",
                  bottom: "-20px",
                  width: "100%",
                }}
              >
                Chat App
              </Typography>
            </Box>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
