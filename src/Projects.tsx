import { Box, Fade, Typography } from "@mui/material";
import { projectData } from "./constants/projectData";
import ProjectCard from "./components/ProjectCard";
import { accentColor } from "./constants/colors";

const Projects = () => {
  return (
    <Fade in={true} timeout={1200}>
      <Box>
        <Typography
          variant={"h2"}
          sx={{
            textAlign: "center",
            my: 4,
            fontWeight: "800",
          }}
        >
          Projects
        </Typography>
        {projectData.map((project, i) => {
          return (
            <ProjectCard
              flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
              rowBackgroundColor={i % 2 === 0 ? "white" : accentColor}
              {...project}
            />
          );
        })}
      </Box>
    </Fade>
  );
};

export default Projects;
