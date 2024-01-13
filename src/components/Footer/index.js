import React from "react";
import { Box, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        width: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          width: "80%",
          height: "2px",
          backgroundColor: "white",
          transform: "translateX(-50%)",
        },
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box flexGrow={1} />
          <Box sx={{ mr: "10px" }} className="footer-logo-box">
            {/* Logo is maintained in CSS */}
            <div className="footer-logo"></div>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              ©2024 Sacred Genesis
            </Typography>
            <Typography variant="body2" className="footer-link-item">
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
