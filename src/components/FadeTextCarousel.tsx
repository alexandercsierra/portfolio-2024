import React, { useEffect, useState } from "react";
import { Typography, Box, Fade } from "@mui/material";

interface FadeTextCarouselProps {
  strings: string[];
  typographyProps?: React.ComponentProps<typeof Typography>;
  height?: number | string;
  displayTime?: number; // Time in ms each string is displayed
  fadeTime?: number; // Time in ms for fade transition
}

const FadeTextCarousel: React.FC<FadeTextCarouselProps> = ({
  strings,
  typographyProps = { variant: "body1" },
  height = 60,
  displayTime = 3000, // Default 3 seconds
  fadeTime = 1000, // Default 1 second for fade
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (strings.length <= 1) return;

    const interval = setInterval(() => {
      // Fade out
      setVisible(false);

      // Wait for fade out, then change text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setVisible(true);
      }, fadeTime);
    }, displayTime + fadeTime * 2);

    return () => clearInterval(interval);
  }, [strings, displayTime, fadeTime]);

  if (strings.length === 0) return null;

  return (
    <Box
      sx={{
        position: "relative",
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid red",
        // width: "340px",
      }}
    >
      <Fade in={visible} timeout={fadeTime}>
        <Typography {...typographyProps} align="center">
          {strings[currentIndex]}{" "}
          <span style={{ color: "black" }}>Engineer</span>
        </Typography>
      </Fade>
    </Box>
  );
};

export default FadeTextCarousel;
