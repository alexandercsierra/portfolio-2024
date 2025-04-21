import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { NavLink as Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { accentColor, blue, darkAccent } from "./constants/colors";
import { resumeLink } from "./constants/otherData";
import CartIcon from "./components/CartIcon";

const navLinks = [
  // { text: "Skills Shop", href: "/store" },
  { text: "Projects", href: "/projects" },
  { text: "Testimonials", href: "/testimonials" },
  { text: "About", href: "/about" },
  // {
  //   text: "Resume",
  //   href: resumeLink,
  //   isExternal: true,
  // },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandercsierra",
    isExternal: true,
  },
];

export const NavLink = ({
  children,
  href,
  isCTA,
  showDot = false,
  sx = {},
  isExternal = false,
  hoverStyles = {},
}: {
  children: React.ReactNode;
  href: string;
  isCTA?: boolean;
  sx?: React.CSSProperties;
  hoverStyles?: React.CSSProperties;
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
        height: isCTA ? "30px" : "40px",
        background: isCTA ? accentColor : "",
        borderRadius: isCTA ? "25px" : "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
        color: isCTA ? "white" : isCurrentLocation ? accentColor : "black",

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
          color: "inherit",
          textTransform: "none",
          paddingX: isCTA ? "25px" : "",

          fontWeight: "700",

          transition: ".6s ease", // Add transition
          "&:hover": {
            color: blue,
            ...hoverStyles,
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
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "65px",
        overflow: "hidden",
        top: 0,
        position: "sticky",
        zIndex: 1003,
        margin: "0 auto",
        px: 4,
        py: 1,
        width: "80%",
        maxWidth: "1500px",
      }}
    >
      <NavLink href={"/"}>{"< Alex Sierra />"}</NavLink>
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
        <NavLink
          sx={{ marginLeft: "20px", height: "40px" }}
          href={"mailto:alexandercsierra@gmail.com"}
          isCTA
          hoverStyles={{
            cursor: "pointer",
            background: darkAccent,
            color: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "25px",
          }}
        >
          contact
        </NavLink>
      </Box>
    </Box>
  );
};

export default Nav;

export const MobileNav = () => {
  const [checked, setChecked] = useState(false);
  const { pathname } = useLocation();

  const unCheck = () => {
    setChecked(false);
  };

  useEffect(() => {
    unCheck();
  }, [pathname]);

  return (
    <>
      <div className="nav">
        <input
          type="checkbox"
          className="blue"
          id="menu"
          onChange={() => setChecked(!checked)}
          checked={checked}
          onClick={() => setChecked(!checked)}
          style={{ display: "none" }}
        />
        <label htmlFor="menu" className="icon">
          <div className="menu"> </div>
        </label>
        <nav>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <NavLink
                href={"mailto:alexandercsierra@gmail.com"}
                isCTA
                sx={{ marginBottom: "10px" }}
              >
                Contact me
              </NavLink>
            </Box>
            <NavLink sx={{ marginLeft: 4 }} href={"/"} isExternal={false}>
              Home
            </NavLink>
            {navLinks.map(({ text, href, isExternal }) => (
              <NavLink
                sx={{ marginLeft: 4 }}
                href={href}
                isExternal={isExternal}
              >
                {text}
              </NavLink>
            ))}
          </Box>
        </nav>
      </div>
    </>
  );
};
