import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ linkText, href }) => {
  return (
    <Link href={href} sx={{ textDecoration: "none", color: "white", px: 1 }}>
      <Typography sx={{ textTransform: "uppercase", fontWeight: "700" }}>
        {linkText}
      </Typography>
    </Link>
  );
};

const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // width: "100%",
        borderBottom: "1px solid red",
        paddingRight: "8vw",
        height: "50px",
      }}
    >
      <NavLink linkText={"Home"} href={"/"} />
      <NavLink linkText={"Projects"} href={"/projects"} />
    </Box>
  );
};

export default Nav;
