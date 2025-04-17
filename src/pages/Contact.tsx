import { Box, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant={"h1"} sx={{ fontWeight: "500", mb: 4 }}>
        Let's get in touch
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField placeholder={"name"} label="Name" variant="outlined" />
      </Box>
    </Box>
  );
};
export default Contact;
