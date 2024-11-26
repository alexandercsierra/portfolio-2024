import React from "react";
import PDFViewer from "./components/PDFViewer";
import { Box, Typography } from "@mui/material";

const Resume = () => {
  return (
    <Box
      sx={{
        mt: 2,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" mb={2}>
        The Resume
      </Typography>
      <PDFViewer />
    </Box>
  );
};

export default Resume;
