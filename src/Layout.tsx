// RootLayout.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import { footerHeight } from "./constants/otherData";

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
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <Box
        sx={{
          minHeight: `calc(100vh - ${footerHeight}px)`,
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <Box sx={{ mb: 2, display: { xs: "none", md: "block" } }}>
          <Nav />
        </Box>
        <Box sx={{ mb: 2, display: { xs: "block", md: "none" } }}>
          <MobileNav />
        </Box>
        <Box
          sx={
            {
              // px: 6
            }
          }
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default RootLayout;
