import React from "react";
import { Box, Fade, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { accentColor, darkAccent } from "../constants/colors";
import TextWithBold from "./TextWithBold";
import FadeTextCarousel from "./FadeTextCarousel";

const BrowseCTA = ({
  ctaLink,
  subCtaLink,
}: {
  ctaLink: { text: string; href: string };
  subCtaLink: { subText: string; subHref: string; isExternal?: boolean };
}) => {
  const { text, href } = ctaLink;
  const { subText, subHref, isExternal } = subCtaLink;
  return (
    <Box
      sx={{
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 0, md: 4 },
        maxWidth: "100%",
      }}
    >
      <NavLink
        to={href}
        style={{
          color: "inherit",
          textAlign: "center",
          textDecoration: "none",
          padding: "inherit",
        }}
      >
        <Box
          sx={{
            background: accentColor,
            color: "white",
            borderRadius: "25px",
            textTransform: "none",
            fontWeight: "700",
            width: { xs: "fit-content", md: "300px" },
            px: 6,
            py: 1.5,
            mb: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: ".6s ease",
            "&:hover": {
              cursor: "pointer",
              background: darkAccent,
              color: "white",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            },
          }}
        >
          {text}
        </Box>
      </NavLink>
      {/* <NavLink
        target={isExternal ? "_blank" : ""}
        to={subHref}
        style={{ fontSize: ".8rem", color: "black" }}
      >
        {subText}
      </NavLink> */}
    </Box>
  );
};

const Description = ({ desc }: { desc: string }) => {
  return (
    <>
      {desc.split("\n").map((text) => {
        console.log({ text });
        return (
          <Box sx={{ my: { xs: 1, md: 2 }, px: 2 }} key={text}>
            <Typography
              sx={{
                fontSize: { xs: ".875rem", md: "1.2rem" },
                maxWidth: "800px",
                "@media (max-width: 1200px)": {
                  fontSize: "1rem",
                },
              }}
            >
              <TextWithBold text={text} />
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

const ImageText = ({
  title,
  description,
  ctaLink,
  subCtaLink,
  imagePath,
  alt = "",
  imagePos = "right",
  maxDescriptionWidth = "800px",
  maxTitleWidth = "800px",
  imgStyles = {},
}: {
  title: string;
  description: string;
  ctaLink: { text: string; href: string };
  subCtaLink: { subText: string; subHref: string; isExternal?: boolean };
  imagePath: string;
  alt: string;
  imagePos: "left" | "right";
  maxDescriptionWidth?: string;
  maxTitleWidth?: string;
  imgStyles?: React.CSSProperties;
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <Fade in={true} timeout={1200}>
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-around",
            alignItems: "center",
            minHeight: `calc(100vh - 81px - 90px)`,
            maxWidth: "1500px",

            margin: "0 auto",
            px: 4,

            flexDirection: {
              xs: "column",
              md: imagePos === "left" ? "row-reverse" : "row",
            },

            "@media (max-width: 1200px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: { xs: "center", md: "flex-start" },
              background: "white",
              p: { xs: 1, md: 5 },
            }}
          >
            <Typography
              variant={"h1"}
              sx={{
                lineHeight: "1",
                fontWeight: "800",
                fontSize: { xs: "3rem", md: "5rem" },
                "@media (max-width: 1200px)": {
                  fontSize: "3.2rem",
                },
                "@media (max-width: 500px)": {
                  fontSize: "2.2rem",
                },

                textAlign: { xs: "center", md: "left" },
              }}
            >
              <TextWithBold text={title} />
            </Typography>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                maxWidth: maxDescriptionWidth,
                "@media (max-width: 1200px)": {
                  display: "none",
                },
              }}
              gap={2}
            >
              <Description desc={description} />
              {/* <BrowseCTA ctaLink={ctaLink} subCtaLink={subCtaLink} /> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 4,
                  gap: 4,
                }}
              >
                <NavLink to={ctaLink.href}>
                  <Box
                    sx={{
                      background: accentColor,
                      color: "white",
                      borderRadius: "25px",
                      textTransform: "none",
                      fontWeight: "700",
                      fontSize: " 1.2rem",
                      width: { xs: "fit-content", md: "200px" },
                      px: 6,
                      py: 1.5,
                      mb: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: ".6s ease",
                      "&:hover": {
                        cursor: "pointer",
                        background: darkAccent,
                        color: "white",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      },
                    }}
                  >
                    {ctaLink.text}
                  </Box>
                </NavLink>
                <NavLink to={ctaLink.href} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      // background: accentColor,
                      // color: "white",
                      border: `1px solid ${accentColor}`,
                      color: accentColor,
                      textDecoration: "none",
                      borderRadius: "25px",
                      textTransform: "none",
                      fontWeight: "700",
                      fontSize: " 1.2rem",
                      width: { xs: "fit-content", md: "100px" },
                      px: 6,
                      py: 1.5,
                      mb: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: ".6s ease",
                      "&:hover": {
                        cursor: "pointer",
                        background: darkAccent,
                        color: "white",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      },
                    }}
                  >
                    contact me
                  </Box>
                </NavLink>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <Box
              className={isHome ? "purplecubes hover" : "hover"}
              sx={{
                width: { xs: "150px", sm: "350px", md: "500px" },
                height: { xs: "150px", sm: "350px", md: "500px" },
                borderRadius: "100%",
                "@media (max-width: 1200px)": {
                  // Custom 400px breakpoint
                  width: "300px",
                  height: "300px",
                },
                "@media (max-width: 900px)": {
                  // Custom 400px breakpoint
                  width: "225px",
                  height: "225px",
                },

                mt: 2,
              }}
            >
              <img
                src={imagePath}
                alt={alt}
                style={{
                  width: "inherit",
                  borderRadius: "100%",
                  marginBottom: "-20px",

                  ...imgStyles,
                }}
              />
            </Box>
            <Box sx={{ width: { xs: "250px", md: "500px" }, mb: 2 }}>
              <Box
                className={"hoverShadow"}
                sx={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 10px 10px 5px",
                  height: "10px",
                  width: { xs: "300px", md: "500px" },
                  borderRadius: "100%",
                  margin: "0 auto",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                "@media (max-width: 1200px)": {
                  display: "flex",
                },
                mb: 6,
                maxWidth: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Description desc={description} />
              <BrowseCTA ctaLink={ctaLink} subCtaLink={subCtaLink} />
            </Box>
          </Box>
        </Box>
      </Fade>
    </>
  );
};

export default ImageText;

const tech = ["Full Stack", "React", "Node", "Next.JS", "GraphQL"];
const RotatingTitle = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        margin: "0 auto",
        paddingY: 3,
        width: { xs: "100%", md: "600px" },
        // border: "1px solid green",
      }}
    >
      <FadeTextCarousel
        strings={tech}
        typographyProps={{
          variant: "h2",

          color: accentColor,
          fontWeight: "700",
          textAlign: { xs: "center", md: "left" },
          // border: "1px solid red",
          lineHeight: 1,
          fontSize: { xs: "3rem", md: "3.75rem" },
        }}
        height={80}
        displayTime={3000} // 4 seconds per quote
        fadeTime={1500} // 800ms for fade transition
      />
    </Box>
  );
};
