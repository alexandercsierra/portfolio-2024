import { Box, Typography } from "@mui/material";
import reactLogo from "./assets/portfolio.png";
import ProductCard from "./components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart as addToCartRedux } from "./redux/cartSlice";
import resumeIcon from "./assets/resume-icon.svg";
import { NavLink } from "react-router-dom";
import { products } from "./constants/productData";
import Homepage from "./components/Homepage";

function App() {
  return <Homepage />;
}

export default App;

const Banner = () => {
  return (
    <Box
      sx={{
        // background: "#B9E0FC",
        color: "#e0e0e0",
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(90deg, rgba(62,142,199,1) 0%, rgba(69,35,136,1) 100%)",
        // background:
        //   "linear-gradient(90deg, rgba(54,127,179,1) 0%, rgba(95,49,187,1) 100%)",
        height: "300px",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        px: 10,
      }}
    >
      <Box>
        <Typography variant={"h1"} sx={{ fontWeight: "800" }}>
          Alex Sierra
        </Typography>
        <Typography variant={"h4"}>Full Stack Software Engineer</Typography>
      </Box>
      <Box>
        <img src={reactLogo} alt="react logo" style={{ width: "250px" }} />
      </Box>
    </Box>
  );
};

const SmallBanner = ({ mainTitle, subtitle, path }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        background: "#4562AD",
        height: "250px",
        width: "40%",
        m: 2,
        mx: 5,
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        px: 10,
        gap: 4,
        boxShadow: "none", // Initial state
        transition: "box-shadow .6s ease", // Add transition
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
      }}
    >
      <NavLink to={path} style={{ textDecoration: "none", width: "100%" }}>
        <Box>
          <Typography
            variant={"h3"}
            color={"white"}
            sx={{ fontWeight: "700", fontSize: "2.5rem" }}
          >
            {mainTitle}
          </Typography>
          <Typography sx={{ color: "white" }}>{subtitle}</Typography>
        </Box>
        <img src={resumeIcon} style={{ width: "150px" }} />
      </NavLink>
    </Box>
  );
};

const NewHome = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addToCartRedux(product));
  };

  return (
    <Box>
      <Banner />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 5,
        }}
      >
        <SmallBanner
          mainTitle={"Resume"}
          subtitle={"4+ years full stack experience"}
          path="/resume"
        />
        <SmallBanner
          mainTitle={"Projects"}
          subtitle={"Full stack projects"}
          path="/projects"
        />
      </Box>
      <Typography mt={3} variant={"h4"} textAlign={"center"}>
        Skills for Sale
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: "100%",
          background: "#f7f7f7",
          overflowX: "auto",
          py: 4,
        }}
      >
        {products.map((product) => (
          <ProductCard addToCart={addToCart} product={product} />
        ))}
      </Box>

      {/* <Footer /> */}
    </Box>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#3E8DC6",
        // height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        color: "white",
        pt: 2,
      }}
    >
      <Box sx={{ width: "25%", textAlign: "center" }}>
        <Typography variant={"h6"}>About Us</Typography>
        <Typography>About me</Typography>
        <Typography>About me</Typography>
        <Typography>About me</Typography>
        <Typography>About me</Typography>
        <Typography>About me</Typography>
        <Typography>About me</Typography>
      </Box>
      <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
      <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
      <Box sx={{ width: "25%", textAlign: "center" }}>asdf</Box>
    </Box>
  );
};
