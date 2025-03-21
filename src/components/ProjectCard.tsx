import { Box, Typography } from "@mui/material";
import fiveablehomepage from "../assets/fiveablehomepage.png";
import phasmo from "../assets/phasmo.png";
import { NavLink } from "react-router-dom";
import { accentColor, grey } from "../constants/colors";

const imageMap = {
  fiveable: fiveablehomepage,
  phasmo: phasmo,
};

const ProjectCard = ({
  title,
  id,
  url,
  backgroundColor = "",
  rowBackgroundColor = "",
  flexDirection = "row",
  descArr = [],
}: {
  title: string;
  id: string;
  url: string;
  backgroundColor?: string;
  flexDirection?: string;
  descArr?: string[];
  rowBackgroundColor?: string;
}) => {
  const textColor = rowBackgroundColor === accentColor ? "white" : "black";
  return (
    <Box
      sx={{
        display: "flex",
        py: 4,
        flexDirection: { xs: "column-reverse", md: flexDirection },
        justifyContent: "center",
        alignItems: "center",
        background: rowBackgroundColor,
      }}
    >
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "25px",
          padding: 2,
          backgroundColor: backgroundColor || "white",
          cursor: "pointer",
          width: { xs: "400px", md: "600px" },
          // boxShadow: "none", // Initial state
          transition: "box-shadow .6s ease", // Add transition
          "&:hover": {
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          },
        }}
      >
        <NavLink to={url} style={{ width: "inherit" }}>
          <img src={imageMap[id]} style={{ width: "inherit" }} />
        </NavLink>
      </Box>
      <Box
        sx={{
          // border: "1px solid red",
          borderRadius: "25px",
          maxWidth: "600px",
          //   height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,

          // backgroundImage:
          // "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
        }}
      >
        <NavLink to={url} style={{ textDecoration: "none" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: textColor,
              textDecoration: "underline",

              transition: "color .4s ease", // Add transition
              "&:hover": {
                color: grey,
              },
            }}
          >
            {title}
          </Typography>
        </NavLink>
        {/* <Typography sx={{}}>{description}</Typography> */}
        <ul>
          {descArr.map((desc) => {
            return (
              <li style={{ color: textColor }}>
                <Typography sx={{ color: textColor }}>{desc}</Typography>
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default ProjectCard;
