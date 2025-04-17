import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import FadeTextCarousel from "./FadeTextCarousel";
import { accentColor } from "../constants/colors";

const FadeCarouselExample: React.FC = () => {
  const quotes = ["Full Stack", "React", "Node", "Next.JS", "GraphQL"];

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", p: 3 }}>
      <FadeTextCarousel
        strings={quotes}
        typographyProps={{
          variant: "h2",
          align: "center",
          color: accentColor,
          fontWeight: "700",
          textAlign: { xs: "center", md: "left" },
          // maxWidth: maxTitleWidth,
          lineHeight: 1,
          fontSize: { xs: "3rem", md: "3.75rem" },
        }}
        height={80}
        displayTime={1000} // 4 seconds per quote
        fadeTime={800} // 800ms for fade transition
      />
    </Box>
  );
};

export default FadeCarouselExample;
