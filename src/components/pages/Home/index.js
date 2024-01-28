import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Home.css"; // Importing CSS for background images

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        color: "white",
        pt: "5vh",
      }}
    >
      {/* Top Section with Header and Image */}
      <Box
        sx={{
          borderTop: "2px solid white",
          borderBottom: "2px solid white",
          mt: { xs: 0, sm: "5vh", md: "10vh" },
          mb: "5vh",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box
              className="home-image-box"
              sx={{ height: 350, borderLeft: "2px solid white" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" sx={{ p: 2 }}>
              Crafting Web Magic with Full-stack Wizardry, AI Adventures, and
              NFT Fun.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Section with Project Images */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: "10vh" }}>
        {/* NFT Website */}
        <Grid item xs={12} sm={4}>
          <a
            href="https://sacred-genesis.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              className="home-project-image nft-website"
              sx={{
                height: "16vh",
                width: "16vh",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "20px",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                p: 1,
                width: "100%",
              }}
            >
              NFT Website
            </Typography>
          </a>
        </Grid>

        {/* Knowledge Base Generator */}
        <Grid item xs={12} sm={4}>
          <a
            href="https://github.com/Nivix047/kb_generator"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              className="home-project-image knowledge-generator"
              sx={{
                height: "16vh",
                width: "16vh",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "20px",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                p: 1,
                width: "100%",
              }}
            >
              Knowledge Base Generator
            </Typography>
          </a>
        </Grid>

        {/* Chat App */}
        <Grid item xs={12} sm={4}>
          <a
            href="https://github.com/Nivix047/django-dm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              className="home-project-image chat-app"
              sx={{
                height: "16vh",
                width: "16vh",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "20px",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                p: 1,
                width: "100%",
              }}
            >
              Chat App
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
