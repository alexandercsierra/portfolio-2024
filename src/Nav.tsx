import React from "react";
import { Box, Typography, Link, SxProps } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({
  linkText,
  href,
  isCTA,
  sx = {},
}: {
  linkText: string;
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
        {linkText}
      </Typography>
    </Link>
  );
};

const Nav = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "8vw",
        height: "50px",
        overflow: "hidden",
        top: 0,
        position: "sticky",
        zIndex: 1003,
        margin: 0,
      }}
    >
      <NavLink linkText={"Home"} href={"/"} />
      <NavLink linkText={"Home"} href={"/"} />
      <NavLink linkText={"Home"} href={"/"} />
      <NavLink
        sx={{ marginLeft: 4 }}
        isCTA
        linkText={"Contact"}
        href={"/projects"}
      />
    </Box>
  );
};

export default Nav;
