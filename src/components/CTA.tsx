import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { accentColor } from "../constants/colors";

const CTA = ({
  href,
  text,
  style = {},
}: {
  href: string;
  text: string;
  style: React.CSSProperties;
}) => {
  return (
    <Box
      sx={{
        background: accentColor,
        color: "white",
        borderRadius: "25px",
        textTransform: "none",
        fontWeight: "700",
        width: "300px",
        px: 6,
        py: 1,
        mb: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
