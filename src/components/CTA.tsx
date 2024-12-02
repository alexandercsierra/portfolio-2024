import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { accentColor, darkAccent } from "../constants/colors";

const CTA = ({
  href,
  text,
  style = {},
  onClick = () => {},
}: {
  href: string;
  text: string;
  style: React.CSSProperties;
  onClick: () => void;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: accentColor,
        color: "white",
        borderRadius: "25px",
        textTransform: "none",
        fontWeight: "700",
        px: 6,
        py: 1,
        mb: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: ".6s ease",
        "&:hover": {
          cursor: "pointer",
          background: darkAccent,
          color: "white",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
        ...style,
      }}
    >
      <NavLink
        to={href}
        style={{
          color: "inherit",
          textAlign: "center",
          textDecoration: "none",
          padding: "inherit",
        }}
      >
        {text}
      </NavLink>
    </Box>
  );
};

export default CTA;
