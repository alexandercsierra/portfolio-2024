import React from "react";
import { Box, Typography, Link, SxProp, TextField } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import logo from "./assets/portfolio.png";
import cart from "./assets/cart.svg";

const NavLink = ({
  children,
  href,
  isCTA,
  sx = {},
}: {
  children: React.ReactNode;
  href: string;
  isCTA?: boolean;
  sx?: SxProps;
}): JSX.Element => {
  return (
    <Link
      href={href}
      sx={{
        textDecoration: "none",
        color: "white",
        px: isCTA ? 2 : 1,
        py: 1,
        height: isCTA ? "20px" : "40px",
        background: isCTA ? "white" : "",
        borderRadius: isCTA ? "25px" : "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        ...sx,
      }}
    >
      <Typography
        sx={{
          color: isCTA ? "black" : "",
          textTransform: "uppercase",
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
    <Typography
      sx={{
        background: "#052D57",
        p: 1,
        borderRadius: "100%",
        fontSize: "12px",
      }}
    >
      🔍
    </Typography>
  );
};

const Nav = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingRight: "8vw",
        height: "65px",
        overflow: "hidden",
        top: 0,
        position: "sticky",
        zIndex: 1003,
        margin: 0,
        background: "#1771DC",
        py: 1,
        width: "100%",
      }}
    >
      <img src={logo} style={{ width: "150px" }} />
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
      <TextField
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
      />

      <NavLink sx={{ marginLeft: 4 }} href={"/projects"}>
        Contact
      </NavLink>
      <NavLink href={"/cart"}>
        <img src={cart} style={{ width: "40px" }} />
      </NavLink>
    </Box>
  );
};

export default Nav;
