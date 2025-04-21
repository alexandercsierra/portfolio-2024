import { Box, Typography } from "@mui/material";
import fiveablehomepage from "../assets/fiveablehomepage.png";
import phasmo from "../assets/phasmo.png";
import algos from "../assets/algoPatterns.png";
import bCard from "../assets/bCard.jpg";
import { NavLink } from "react-router-dom";
import { accentColor, grey } from "../constants/colors";

const imageMap = {
  fiveable: fiveablehomepage,
  phasmo: phasmo,
  algos,
  businessCard: bCard,
};

const ProjectCard = ({
  title,
  id,
  url,
  backgroundColor = "",
  rowBackgroundColor = "",
  flexDirection = "row",
  descArr = [],
  isFirst,
}: {
  title: string;
  id: string;
  url: string;
  backgroundColor?: string;
  flexDirection?: string;
  descArr?: string[];
  rowBackgroundColor?: string;
  isFirst: boolean;
}) => {
  const textColor = rowBackgroundColor === accentColor ? "white" : "black";
  return (
    <Box
      sx={{
        display: "flex",
        py: { xs: 4, md: 8 },
        pt: isFirst ? 0 : { xs: 4, md: 8 },
        flexDirection: { xs: "column-reverse", md: flexDirection },
        justifyContent: "center",
        alignItems: "center",
        background: rowBackgroundColor,
      }}
    >
      <Box
        sx={{
          lineHeight: "0",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: backgroundColor ? "25px" : "none",
          padding: backgroundColor ? 2 : "",
          backgroundColor: backgroundColor || "none",
          cursor: "pointer",
          width: { xs: "350px", md: "600px" },
          // boxShadow: "none", // Initial state
          transition: "box-shadow .6s ease", // Add transition
          "&:hover": {
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          },
        }}
      >
        <NavLink
          to={url}
          style={{
            width: "inherit",
          }}
          target={"_blank"}
        >
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
                <Typography
                  sx={{
                    color: textColor,
                    fontSize: { xs: ".875rem", md: "1rem" },
                  }}
                >
                  {desc}
                </Typography>
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default ProjectCard;
