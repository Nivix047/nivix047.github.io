import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Toolbar, Box, Tabs, Tab, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "white" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <div className="header-content">
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
                <Box sx={{ display: "flex" }}>
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
        {/* Add mobile view handling if needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
