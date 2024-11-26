// RootLayout.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

const MobileNav = () => {
  const [checked, setChecked] = useState(false);

  const unCheck = () => {
    setChecked(false);
  };
  return (
    <div
      style={{ background: "blue", border: "1px solid red" }}
      className="nav"
    >
      <input
        type="checkbox"
        className="blue"
        id="menu"
        onChange={() => setChecked(!checked)}
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="menu" className="icon">
        <div className="menu"></div>
      </label>
    </div>
  );
};

const RootLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ mb: 2, display: { xs: "none", md: "block" } }}>
        <Nav />
      </Box>
      <Box sx={{ mb: 2, display: { xs: "block", md: "none" } }}>
        <MobileNav />
      </Box>
      <Box sx={{ px: 6 }}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default RootLayout;
