import { Box, Typography, Button } from "@mui/material";
import reactLogo from "../assets/react.svg";

const imageMap = {
  react: reactLogo,
};

const ProductCard = ({
  product,
  addToCart,
}: {
  product: { name: string; image?: string; price?: number };
}) => {
  const { name, image, price } = product;
  return (
    <Box
      sx={{
        background: "white",
        width: "250px",
        minWidth: "250px",
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
            background: "#f4f4f4",
            borderRadius: "15px",
            width: "100%",
            height: "270px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={imageMap[image]} style={{ width: "100%" }} />
        </Box>
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
          {name}
        </Typography>
        <Button
          sx={{
            background: "red",
            width: "70%",
            py: 1,
            px: 1.5,
            borderRadius: "25px",
            textAlign: "center",
          }}
          onClick={() => addToCart(product)}
        >
          <Typography
            sx={{ color: "white", fontWeight: "800", fontSize: ".75rem" }}
          >
            Add to cart
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
