import { Outlet } from "react-router-dom";
import Nav, { MobileNav } from "./Nav";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import { footerHeight } from "./constants/otherData";

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
        className="cubes"
        sx={{
          minHeight: `calc(100vh - ${footerHeight}px - 15px)`,
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <Box sx={{ mb: 2, display: { xs: "none", md: "block" } }}>
          <Nav />
        </Box>
        <Box sx={{ mb: "50px", display: { xs: "block", md: "none" } }}>
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
