import { Box, Typography } from "@mui/material";

const ProductCard = () => {
  return (
    <Box
      sx={{
        background: "white",
        width: "250px",
        height: "400px",
        borderRadius: "15px",
        m: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "300px",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            m: 1,
            background: "#e3e0e0",
            borderRadius: "15px",
            width: "100%",
            height: "270px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant={"h6"} sx={{ color: "black" }}>
          Product Name
        </Typography>
        <Box
          sx={{
            background: "red",
            width: "70%",
            py: 1,
            px: 1.5,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ color: "white", fontWeight: "800", fontSize: ".75rem" }}
          >
            Add to cart
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
