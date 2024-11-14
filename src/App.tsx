import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import reactLogo from "./assets/portfolio.png";

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

const StoreGroup = ({ title }) => {
  return (
    <Box
      sx={{
        m: 1,
        background: "white",
        width: "400px",
        // height: "500px",
        p: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant={"h5"} sx={{ color: "black" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ItemSmallThumbnail />
          <ItemSmallThumbnail />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ItemSmallThumbnail />
          <ItemSmallThumbnail />
        </Box>
      </Box>
    </Box>
  );
};

const ItemSmallThumbnail = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Box
        sx={{
          height: "150px",
          width: "150px",
          background: "blue",
        }}
      ></Box>
      <Typography variant={"caption"} sx={{ color: "black" }}>
        Under $10
      </Typography>
    </Box>
  );
};

const Home = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 40px)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Typography variant={"h1"}>Alex Sierra</Typography>
        <Typography variant={"h4"}>Full Stack Software Engineer</Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        <AnimatedImage />
      </Box>
    </Box>
  );
};

const AnimatedImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <Box
      sx={{
        "& img": {
          width: "100%",
          height: "auto",
          // overflow: "hidden",
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0) rotate(0deg)"
            : "translateX(200%) rotate(180deg)",
          transition: "all 2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        },
      }}
    >
      <img src={reactLogo} alt="react logo" />
    </Box>
  );
};
