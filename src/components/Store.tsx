import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";
import { products } from "../constants/productData";
import transProfile from "../assets/transprofile.png";
import { accentColor, darkAccent, lightGrey } from "../constants/colors";

import { NavLink } from "../Nav";
import { useSelector } from "react-redux";

const Store = () => {
  const productCategories = new Set(
    products.map((product) => product.category)
  );

  const cart = useSelector((state) => state.cart.cart);

  const hasSavedProducts = cart?.length > 0;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
      <Box
        className="purplecubes"
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

          // // backgroundImage:
          // //   "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
          // backgroundImage:
          //   "linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)",
        }}
      >
        <Box sx={{ px: { xs: 2, md: 15 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              color: "white",
              lineHeight: "100%",
              fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
            }}
          >
            Dev experience across the whole stack?
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: { xs: "1.25rem", md: "2rem" } }}
          >
            you'll find it here
          </Typography>
        </Box>
        <Box
          sx={{ width: { xs: "150px", md: "300px" }, px: { xs: 2, md: 15 } }}
        >
          <img src={transProfile} style={{ width: "inherit" }} />
        </Box>
      </Box>
      <Typography variant="h3" sx={{ fontWeight: "700", mt: 4 }}>
        Skills Shop
      </Typography>
      <Typography>real skills, fake prices</Typography>

      <NavLink
        href="/cart"
        isCTA
        sx={{
          background: "white",
          color: accentColor,
          border: `2px solid ${darkAccent}`,
          visibility: hasSavedProducts ? "visible" : "hidden",
        }}
      >
        checkout now
      </NavLink>

      <Box sx={{ width: "100%" }}>
        {Array.from(productCategories).map((category) => {
          return (
            <Box
              // className="lightcubes"
              sx={{
                background: lightGrey,
                // background: "rgb(210,210,210)",
                // background:
                //   "linear-gradient(90deg, rgba(210,210,210,1) 0%, rgba(255,255,255,1) 100%)",
                padding: 1,
                my: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "700",
                  color: "black",
                  mt: 2,
                  textTransform: "capitalize",
                  pl: 2,
                  // textShadow: "4px 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                {category} skills
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {products
                  .filter((prod) => prod.category === category)
                  .map((product) => {
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
        })}
      </Box>
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default Store;
