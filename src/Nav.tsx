import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { NavLink as Link, useLocation } from "react-router-dom";
import cart from "./assets/cart.svg";
import { useSelector } from "react-redux";
import { accentColor, blue } from "./constants/colors";
import { resumeLink } from "./constants/otherData";
import CartIcon from "./components/CartIcon";

const navLinks = [
  { text: "Skills Shop", href: "/store" },
  { text: "Projects", href: "/projects" },
  { text: "About", href: "/about" },
  {
    text: "Resume",
    href: resumeLink,
    isExternal: true,
  },
];

const NavLink = ({
  children,
  href,
  isCTA,
  showDot = false,
  sx = {},
  isExternal = false,
}: {
  children: React.ReactNode;
  href: string;
  isCTA?: boolean;
  sx?: React.CSSProperties;
  showDot?: boolean;
  isExternal?: boolean;
}): JSX.Element => {
  const location = useLocation();
  const { pathname } = location;
  const isCurrentLocation = pathname === href;

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
      target={isExternal ? "_blank" : ""}
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
          color: isCTA ? "white" : isCurrentLocation ? accentColor : "",
          textTransform: "none",
          paddingX: isCTA ? "25px" : "",

          fontWeight: "700",

          transition: "color .4s ease", // Add transition
          "&:hover": {
            color: blue,
          },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

const Nav = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "65px",
        overflow: "hidden",
        top: 0,
        position: "sticky",
        zIndex: 1003,
        margin: 0,
        px: 2,
        py: 1,
      }}
    >
      <NavLink href={"/"}>Alexander Sierra</NavLink>
      <Box
        gap={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {navLinks.map(({ text, href, isExternal }) => (
          <NavLink sx={{ marginLeft: 4 }} href={href} isExternal={isExternal}>
            {text}
          </NavLink>
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <NavLink href={"/cart"} showDot>
          <CartIcon />
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
