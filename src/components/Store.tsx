import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";
import { products } from "../constants/productData";
import { lightBlue } from "../constants/colors";
import transProfile from "../assets/transprofile.png";

const Store = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          // flexWrap: "wrap",
          width: "100%",
          pt: 4,
          // px: 15,
          // backgroundColor: "#98e5ff",
          // // opacity: 0.8,
          // backgroundImage: "radial-gradient(#ffffff 1.3px, #98e5ff 1.3px)",
          // backgroundSize: "26px 26px",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",

          // backgroundImage:
          //   "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
          backgroundImage:
            "linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)",
        }}
      >
        <Box sx={{ px: { xs: 0, md: 15 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              color: "white",
              lineHeight: "100%",
              fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
            }}
          >
            Dev experience across
            <br /> the whole stack?
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: { xs: "1.25rem", md: "2rem" } }}
          >
            you'll find it here
          </Typography>
        </Box>
        <Box
          sx={{ width: { xs: "150px", md: "300px" }, px: { xs: 0, md: 15 } }}
        >
          <img src={transProfile} style={{ width: "inherit" }} />
        </Box>
      </Box>
      <Typography variant="h3" sx={{ fontWeight: "700", mt: 4 }}>
        Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "80%",
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              addToCart={() => console.log("add to cart")}
              product={product}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Store;
