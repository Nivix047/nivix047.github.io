import React from "react";
import { Box, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        paddingLeft: "20px",
        padding: "20px",
        color: "white",
        width: "100%",
        position: "relative",
        borderLeft: "2px solid white",
        borderRight: "2px solid white",
      }}
    >
      {/* Top Border */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "80%",
          height: "2px",
          backgroundColor: "white",
          transform: "translateX(-50%)",
        }}
      />
      {/* Bottom Border */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Aligns the border to the bottom
          left: "50%",
          width: "80%",
          height: "2px",
          backgroundColor: "white",
          transform: "translateX(-50%)",
        }}
      />
      {/* Content */}
      <Grid
        container
        direction="row" // Change to row direction
        alignItems="center" // Center items vertically
        justifyContent="center" // Center items horizontally
        spacing={2} // Add some space between items
      >
        {/* Logo */}
        <Grid item>
          <Box className="footer-logo" />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column" // Stack text items vertically
            alignItems="center" // Center items horizontally
          >
            {/* Sacred Genesis Typography */}
            <Grid item>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                ©2024 Sacred Genesis
              </Typography>
            </Grid>
            {/* Terms & Conditions Link */}
            <Grid item>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                <MuiLink
                  component={Link}
                  to="/terms"
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Terms & Conditions
                </MuiLink>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
