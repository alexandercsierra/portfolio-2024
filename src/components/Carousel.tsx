import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Stack,
  useTheme,
  styled,
} from "@mui/material";
import {
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBeforeIcon,
} from "@mui/icons-material";

// Custom styled dot component
const DotIndicator = styled("button")(({ theme, active }) => ({
  width: active ? 20 : 8,
  height: 8,
  borderRadius: 4,
  padding: 0,
  border: "none",
  backgroundColor: active
    ? theme.palette.primary.main
    : theme.palette.grey[300],
  transition: theme.transitions.create(["width", "background-color"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: active
      ? theme.palette.primary.main
      : theme.palette.grey[400],
  },
}));

const TestimonialCarousel = () => {
  const theme = useTheme();
  const testimonials = [
    {
      id: 1,
      name: "Tán Ho",
      role: "Senior Product Designer",
      content:
        "Some people don't just do their job - they transform the entire workplace. That's Alex. Over our 4+ years together at Fiveable, I've had the privilege of watching him shape not just our codebase, but our entire company culture.",
      color: theme.palette.secondary.light,
    },
    {
      id: 2,
      name: "Aaron Levin",
      role: "Head of Engineering",
      content:
        "Alex is an outstanding engineer and teammate. His technical skills are sharp, and he learns incredibly quickly & independently, which made him dependable on a wide variety of full-stack projects.",
      color: theme.palette.primary.light,
    },
    {
      id: 3,
      name: "Tán Ho",
      role: "Senior Product Designer",
      content:
        "What truly sets Alex apart isn't just his meticulous attention to detail or his knack for asking the perfect questions - it's how he shows up as his full, authentic self every single day.",
      color: theme.palette.secondary.light,
    },
    {
      id: 4,
      name: "Aaron Levin",
      role: "Head of Engineering",
      content:
        "We often called him a 'clarity creator' because of his intrinsic desire to keep projects, timelines, and high level goals organized across multiple teams, regardless of his role at any point in time. He naturally evolved into a great team lead when needed.",
      color: theme.palette.info.light,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 8000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: 90,
          margin: "0 auto",
        }}
      >
        <Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{
                bgcolor: testimonials[currentIndex].color,
                width: 20,
                height: 20,
                alignSelf: "flex-start",
                fontSize: ".8rem",
              }}
            >
              {testimonials[currentIndex].name.charAt(0)}
            </Avatar>
            <Box gap={0}>
              <Typography sx={{ lineHeight: ".2rem", fontSize: ".8rem" }}>
                {testimonials[currentIndex].name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: ".7rem" }}
                color="text.secondary"
              >
                {testimonials[currentIndex].role}
              </Typography>
            </Box>
          </Stack>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontStyle: "italic", mt: 1, fontSize: ".8rem" }}
          >
            "{testimonials[currentIndex].content}"
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <IconButton onClick={handlePrevious} size="large">
          <NavigateBeforeIcon />
        </IconButton>

        <Stack direction="row" spacing={1}>
          {testimonials.map((_, index) => (
            <DotIndicator
              key={index}
              active={index === currentIndex}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </Stack>

        <IconButton onClick={handleNext} size="large">
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
