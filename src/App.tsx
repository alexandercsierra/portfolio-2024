import { Box, Typography } from "@mui/material";
import reactLogo from "./assets/portfolio.png";
import ProductCard from "./components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart as addToCartRedux } from "./redux/cartSlice";

const products = [
  {
    id: "react",
    name: "React",
    image: "react",
    desc: "Skills in frontend react",
  },
  {
    id: "es6",
    name: "ES6",
    image: "react",
    desc: "Skills in frontend react",
  },
  {
    id: "nodejs",
    name: "Node JS",
    image: "react",
    desc: "Skills in frontend react",
  },
];

function App() {
  return <NewHome />;
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

const NewHome = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addToCartRedux(product));
  };

  return (
    <Box>
      <Banner />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#4562AD",
            height: "250px",
            width: "40%",
            m: 2,
            mx: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "15px",
            px: 10,
          }}
        >
          <Typography
            variant={"h3"}
            color={"white"}
            sx={{ fontWeight: "700", fontSize: "2.5rem" }}
          >
            50% off
          </Typography>
          <Typography sx={{ color: "white" }}>Full stack developing</Typography>
        </Box>
        <Box
          sx={{
            background: "#4562AD",
            height: "250px",
            width: "40%",
            m: 2,
            mx: 5,
            display: "flex",
            borderRadius: "15px",
            flexDirection: "column",
            justifyContent: "center",
            px: 10,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: "100%",
          background: "#f7f7f7",
          overflowX: "auto",
        }}
      >
        {products.map((product) => (
          <ProductCard addToCart={addToCart} product={product} />
        ))}
        {/* <ProductCard
          addToCart={addToCart}
          product={{
            name: "React",
            image: "react",
            desc: "Skills in frontend react",
          }}
        />
        <ProductCard
          addToCart={addToCart}
          product={{
            name: "TypeScript",
            image: "react",
            desc: "Skills in frontend react",
          }}
        />

        <ProductCard
          addToCart={addToCart}
          product={{
            name: "Node JS",
            image: "react",
            desc: "Skills in frontend react",
          }}
        />

        <ProductCard
          addToCart={addToCart}
          product={{
            name: "GraphQL",
            image: "react",
            desc: "Skills in frontend react",
          }}
        />
        <ProductCard
          addToCart={addToCart}
          product={{ name: "ES6", image: "react" }}
        />
        <ProductCard
          addToCart={addToCart}
          product={{
            name: "Material UI",
            image: "react",
            desc: "Skills in frontend react",
          }}
        /> */}
      </Box>
      <Footer />
    </Box>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        // background: "#052D57",
        // height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        border: "1px solid red",
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
