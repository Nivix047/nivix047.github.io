import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Toolbar,
  Box,
  ButtonBase,
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
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
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
    if (path) {
      navigate(path);
    }
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {["About Me", "Contact Me", "Resume"].map((text, index) => (
          <ListItem key={text}>
            <ButtonBase
              sx={{ width: "100%", justifyContent: "flex-start" }}
              onClick={() =>
                handleNavigation(
                  index === 0 ? "/about" : index === 1 ? "/contact" : "/resume"
                )
              }
            >
              <ListItemText primary={text} />
            </ButtonBase>
          </ListItem>
        ))}
        <ListItem>
          <ButtonBase
            sx={{ width: "100%", justifyContent: "flex-start" }}
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <ListItemText primary="Twitter" />
            <TwitterIcon />
          </ButtonBase>
        </ListItem>
        <ListItem>
          <ButtonBase
            sx={{ width: "100%", justifyContent: "flex-start" }}
            onClick={() => navigate("/github")}
          >
            <ListItemText primary="GitHub" />
            <GitHubIcon />
          </ButtonBase>
        </ListItem>
        <ListItem>
          <ButtonBase
            sx={{ width: "100%", justifyContent: "flex-start" }}
            onClick={() => navigate("/indeed")}
          >
            <ListItemText primary="Indeed" />
            <BusinessCenterIcon />
          </ButtonBase>
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
                >
                  <Tab
                    component={Link}
                    to="/about"
                    label="About Me"
                    sx={{ color: "white", textTransform: "uppercase" }}
                  />
                  <Tab
                    component={Link}
                    to="/contact"
                    label="Contact Me"
                    sx={{ color: "white", textTransform: "uppercase" }}
                  />
                  <Tab
                    component={Link}
                    to="/resume"
                    label="Resume"
                    sx={{ color: "white", textTransform: "uppercase" }}
                  />
                </Tabs>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    color="inherit"
                    onClick={() => navigate("/indeed")}
                  >
                    <BusinessCenterIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    onClick={() => window.open("https://twitter.com", "_blank")}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    onClick={() => navigate("/github")}
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
