import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import reactLogo from "../assets/portfolio.png";

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

export default AnimatedImage;
