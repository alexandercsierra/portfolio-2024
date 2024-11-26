import React, { useState, useEffect } from "react";
import { Box, Typography, SxProps, TextField } from "@mui/material";
import { NavLink as Link } from "react-router-dom";
import logo from "./assets/portfolio.png";
import cart from "./assets/cart.svg";
import { useSelector } from "react-redux";
import Search from "@mui/icons-material/Search";
import { accentColor } from "./constants/colors";

const NavLink = ({
  children,
  href,
  isCTA,
  showDot = false,
  sx = {},
}: {
  children: React.ReactNode;
  href: string;
  isCTA?: boolean;
  sx?: React.CSSProperties;
  showDot?: boolean;
}): JSX.Element => {
  const cart = useSelector((state) => state.cart.cart);

  const [showCartDot, setShowCartDot] = useState(showDot && cart.length > 0);

  useEffect(() => {
    if (cart.length > 0 && showDot) {
      setShowCartDot(true);
    } else {
      setShowCartDot(false);
    }
  }, [cart.length]);
  return (
    <Link
      to={href}
      style={{
        textDecoration: "none",

        textTransform: "none",
        color: "black",
        height: isCTA ? "30px" : "40px",
        background: isCTA ? accentColor : "",
        borderRadius: isCTA ? "25px" : "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
        ...sx,
      }}
    >
      {showCartDot && (
        <Box
          sx={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "red",
            borderRadius: "100%",
            top: 0,
            right: 0,
          }}
        />
      )}
      <Typography
        sx={{
          color: isCTA ? "white" : "",
          textTransform: "none",
          paddingX: isCTA ? "25px" : "",

          fontWeight: "700",
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

const SearchIcon = () => {
  return (
    <Box
      sx={{
        background: "#27277e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        p: 0.5,
      }}
    >
      <Search sx={{ p: 0, m: 0, color: "white", fontSize: "25px" }} />
    </Box>
  );
};

const Nav = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingRight: "8vw",
        height: "65px",
        overflow: "hidden",
        top: 0,
        position: "sticky",
        zIndex: 1003,
        margin: 0,
        // background: "#3E8DC6",
        px: 2,
        py: 1,
        // width: "100%",
        // border: "1px solid red",
        // boxShadow:
        // "rgba(0, 0, 0, 0.04) 0px -1px 2px, rgba(0, 0, 0, 0.04) 0px 1px 2px, rgba(0, 0, 0, 0.04) 0px 3px 4px",
      }}
    >
      <NavLink href={"/"}>Alexander Sierra</NavLink>
      {/* <Box
        sx={{
          height: "50px",
          width: "300px",
          background: "#052D57",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography sx={{ p: 1, pl: 3 }}>Hey there</Typography>
      </Box> */}
      {/* <TextField
        sx={{
          "& .MuiInputBase-root": {
            width: "550px",
            height: "50px",
            borderRadius: "25px",
            background: "white",
          },
        }}
        placeholder={"What can we help you find?"}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      /> */}
      <Box
        gap={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: "80%",
        }}
      >
        <NavLink sx={{ marginLeft: 4 }} href={"/about"}>
          About
        </NavLink>
        <NavLink sx={{ marginLeft: 4 }} href={"/resume"}>
          Resume
        </NavLink>
        <NavLink sx={{ marginLeft: 4 }} href={"/projects"}>
          Projects
        </NavLink>
        <NavLink sx={{ marginLeft: 4 }} href={"/store"}>
          Store
        </NavLink>
      </Box>
      <Box sx={{ display: "flex" }}>
        <NavLink href={"/cart"} showDot>
          <img src={cart} style={{ width: "40px", color: "black" }} />
        </NavLink>
        <NavLink
          sx={{ marginLeft: "20px" }}
          href={"mailto:alexandercsierra@gmail.com"}
          isCTA
        >
          Hire me
        </NavLink>
      </Box>
    </Box>
  );
};

export default Nav;
