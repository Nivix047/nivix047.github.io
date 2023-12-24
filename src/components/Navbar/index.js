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
  ListItem,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Navbar.css";

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
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {/* Other ListItem components */}
        <ListItem
          component={Link}
          to="/"
          onClick={() => handleNavigation("/")}
          className="about-link"
        >
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem
          component={Link}
          to="/contact"
          onClick={() => handleNavigation("/contact")}
          className="contact-link"
        >
          <ListItemText primary="Contact Me" />
        </ListItem>
        <ListItem
          component={Link}
          to="/resume"
          onClick={() => handleNavigation("/resume")}
          className="resume-link"
        >
          <ListItemText primary="Resume" />
        </ListItem>
        {/* Social media icons */}
        <ListItem
          onClick={() => window.open("https://twitter.com", "_blank")}
          className="social-media-item"
        >
          <TwitterIcon />
          <ListItemText primary="Twitter" />
        </ListItem>
        <ListItem
          onClick={() => window.open("https://github.com", "_blank")}
          className="social-media-item"
        >
          <GitHubIcon />
          <ListItemText primary="GitHub" />
        </ListItem>
        <ListItem
          onClick={() => window.open("https://www.linkedin.com", "_blank")}
          className="social-media-item"
        >
          <LinkedInIcon />
          <ListItemText primary="LinkedIn" />
        </ListItem>
      </List>
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
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <div className="navbar-content">
            {!isMobile && (
              <>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  TabIndicatorProps={{ style: { display: "none" } }}
                >
                  {/* Tabs */}
                  <Tab
                    component={Link}
                    to="/"
                    label={<span style={{ fontSize: "1.2rem" }}>About Me</span>}
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  />
                  <Tab
                    component={Link}
                    to="/contact"
                    label={
                      <span style={{ fontSize: "1.2rem" }}>Contact Me</span>
                    }
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  />
                  <Tab
                    component={Link}
                    to="/resume"
                    label={<span style={{ fontSize: "1.2rem" }}>Resume</span>}
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  />
                </Tabs>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* Icon Buttons */}
                  <IconButton
                    color="inherit"
                    onClick={() =>
                      window.open("https://www.linkedin.com", "_blank")
                    }
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
                    onClick={() =>
                      window.open("https://github.com/nivix047", "_blank")
                    }
                    sx={{ fontSize: "1.5rem" }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </>
            )}
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
