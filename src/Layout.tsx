// RootLayout.tsx
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ mb: 2 }}>
        <Nav />
      </Box>
      <Box sx={{ px: 6 }}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default RootLayout;
