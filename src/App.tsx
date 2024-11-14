import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import reactLogo from "./assets/portfolio.png";

function App() {
  return <Home />;
}

export default App;

const Home = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 40px)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Typography variant={"h1"}>Alex Sierra</Typography>
        <Typography variant={"h4"}>Full Stack Software Engineer</Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        <AnimatedImage />
      </Box>
    </Box>
  );
};

const AnimatedImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <Box
      sx={{
        "& img": {
          width: "100%",
          height: "auto",
          // overflow: "hidden",
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0) rotate(0deg)"
            : "translateX(200%) rotate(180deg)",
          transition: "all 2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        },
      }}
    >
      <img src={reactLogo} alt="react logo" />
    </Box>
  );
};
