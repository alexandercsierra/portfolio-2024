import { Box, Typography } from "@mui/material";
import reactLogo from "./assets/portfolio.png";
import ProductCard from "./components/ProductCard";

function App() {
  return <NewHome />;
}

export default App;

const NewHome = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "#B9E0FC",
          height: "300px",
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          px: 10,
        }}
      >
        <Box>
          <Typography
            variant={"h1"}
            sx={{ fontWeight: "800", color: "#212122" }}
          >
            Alex Sierra
          </Typography>
          <Typography variant={"h4"} sx={{ color: "#212122" }}>
            Full Stack Software Engineer
          </Typography>
        </Box>
        <Box>
          <img src={reactLogo} alt="react logo" style={{ width: "250px" }} />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#B9E0FC",
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
            color={"#CC0000"}
            sx={{ fontWeight: "700", fontSize: "2.5rem" }}
          >
            50% off
          </Typography>
          <Typography>Full stack developing</Typography>
        </Box>
        <Box
          sx={{
            background: "#B9E0FC",
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
      <Box sx={{ display: "flex", gap: 2, background: "#f7f7f7" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
