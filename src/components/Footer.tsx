import { Box, Typography } from "@mui/material";
import { accentColor } from "../constants/colors";
import { footerHeight } from "../constants/otherData";

const Footer = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        background: accentColor,
        // height: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        color: "white",
        maxHeight: footerHeight,
        py: 4,
      }}
    >
      <Typography> © Copyright Alexander Sierra 2024</Typography>
      {/* <Box>
        <Box sx={{ width: "25%", textAlign: "center" }}>
          <Typography variant={"h6"}>About Us</Typography>
          <Typography>About me</Typography>
        </Box>
        <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
        <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
        <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
      </Box> */}
    </Box>
  );
};

export default Footer;
