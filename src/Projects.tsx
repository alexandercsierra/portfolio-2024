import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Box, Typography } from "@mui/material";
import { projectData } from "./constants/projectData";
import fiveablehomepage from "./assets/fiveablehomepage.png";
import phasmo from "./assets/phasmo.png";
import { NavLink } from "react-router-dom";
import ProjectCard from "./components/ProjectCard";
import { accentColor } from "./constants/colors";

// some masonry here could be cool
// https://dribbble.com/shots/25246362-Coffee-shop-hero-section-design-Fibo-Studio
// https://dribbble.com/shots/25240508-Dashboard-for-an-AR-Product-Polyfun

const imageMap = {
  fiveable: fiveablehomepage,
  phasmo: phasmo,
};

const Projects = () => {
  return (
    <Box>
      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}> */}
      {/* <Masonry> */}
      <Typography
        variant={"h1"}
        sx={{ textAlign: "center", my: 4, fontWeight: "800" }}
      >
        My Work
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

      {/* </Masonry> */}
      {/* </ResponsiveMasonry> */}
    </Box>
  );
};

export default Projects;
