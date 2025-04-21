import { Box, Typography, useTheme, Fade } from "@mui/material";
import Carousel from "../components/Carousel";

const getTestimonials = (theme) => [
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
    id: 5,
    name: "Bryan Clark",
    role: "Product Engineer",
    content:
      "Having worked at a number of companies in my career, I can truly say that Alex is one of the finest engineers I've ever worked with. Alex's technical skills, in addition to his drive to solve complex problems, are on par with much more seasoned engineer's from my experience.",
    color: theme.palette.warning.light,
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
  {
    id: 6,
    name: "Bryan Clark",
    role: "Product Engineer",
    content:
      "What sets Alex apart is his unique ability to bring clarity to complex situations without dominating the conversation. His thoughtful approach and sharp insights consistently cut through ambiguity, leading our team to pragmatic and effective solutions.",
    color: theme.palette.warning.light,
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const testimonials = getTestimonials(theme);
  return (
    <Fade in={true} timeout={1200}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant={"h1"}
          sx={{
            fontWeight: "700",
            my: 4,
            px: 2,
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
          }}
        >
          What do people say about my work?
        </Typography>
        <Carousel />
      </Box>
    </Fade>
  );
};

export default Testimonials;
