// RootLayout.tsx
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Box } from "@mui/material";

const RootLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Nav />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
