import { Box, Typography } from "@mui/material";
import { accentColor } from "../constants/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        border: "1px solid red",
        background: accentColor,
        // height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        color: "white",
        pt: 2,
        // position: "fixed",
        bottom: 0,
        margin: 0,
      }}
    >
      <Box sx={{ width: "25%", textAlign: "center" }}>
        <Typography variant={"h6"}>About Us</Typography>
        <Typography>About me</Typography>
      </Box>
      <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
      <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
      <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
    </Box>
  );
};

export default Footer;
