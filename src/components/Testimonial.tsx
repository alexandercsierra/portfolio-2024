import { Box, Typography } from "@mui/material";

export const Testimonial = ({
  test,
}: {
  test: {
    id: string;
    name: string;
    role: string;
    content: string;
    color: string;
  };
}) => {
  return (
    <Box
      sx={{
        margin: 2,
        background: "#f1f1f1",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: { xs: "90%", md: "500px" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            margin: 2,
            background: test.color,
            p: 2,
            borderRadius: "100%",
            width: { xs: "15px", md: "30px" },
            height: { xs: "15px", md: "30px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "700" }}
          >
            {test.name.charAt(0)}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ lineHeight: ".2rem", fontSize: "1rem" }}>
            {test.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: ".875rem" }}
            color="text.secondary"
          >
            {test.role}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: ".8rem", md: "1.2rem" },
          maxWidth: "500px",
          px: 4,
          pb: 4,
        }}
      >
        "{test.content}"
      </Typography>
    </Box>
  );
};

export default Testimonial;
