import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  Tab,
  Tabs,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path) => {
    setDrawerOpen(false);
    navigate(path);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        role: "presentation",
        onClick: handleDrawerToggle,
        onKeyDown: handleDrawerToggle,
      }}
    >
      <List>{/* ... List Items ... */}</List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "white" }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawerContent}
        </Drawer>
        {!isMobile && (
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              ".MuiTab-root": {
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: "white",
                "&:hover": { textDecoration: "underline" },
              },
            }}
          >
            <Tab component={Link} to="/" label="About Me" />
            <Tab component={Link} to="/contact" label="Contact Me" />
            <Tab component={Link} to="/resume" label="Resume" />
          </Tabs>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
            sx={{ fontSize: "1.5rem" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => window.open("https://twitter.com", "_blank")}
            sx={{ fontSize: "1.5rem" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => window.open("https://github.com", "_blank")}
            sx={{ fontSize: "1.5rem" }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
