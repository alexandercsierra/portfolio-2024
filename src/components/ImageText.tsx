import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { accentColor, darkAccent } from "../constants/colors";
import TextWithBold from "./TextWithBold";

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
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
            py: 1,
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
      <NavLink
        target={isExternal ? "_blank" : ""}
        to={subHref}
        style={{ fontSize: ".8rem", color: "black" }}
      >
        {subText}
      </NavLink>
    </Box>
  );
};

const Description = ({ desc }: { desc: string }) => {
  return (
    <>
      {desc.split("\n").map((text) => {
        console.log({ text });
        return (
          <Box sx={{ my: 1 }}>
            <TextWithBold text={text} />
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
  imagePos = "right",
  maxDescriptionWidth = "800px",
  maxTitleWidth = "800px",
  imgStyles = {},
}: {
  title: string;
  description: string;
  ctaLink: { text: string; href: string };
  subCtaLink: { subText: string; subHref: string };
  imagePath: string;
  imagePos: "left" | "right";
  maxDescriptionWidth?: string;
  maxTitleWidth?: string;
  imgStyles?: React.CSSProperties;
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "70vh",
          px: 4,

          flexDirection: {
            xs: "column",
            md: imagePos === "left" ? "row-reverse" : "row",
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
          {isHome && (
            <Typography
              variant={"h5"}
              sx={{ fontWeight: "bold", color: darkAccent }}
            >
              Alexander Sierra
            </Typography>
          )}
          <Typography
            variant={"h2"}
            sx={{
              fontWeight: "700",
              textAlign: { xs: "center", md: "left" },
              maxWidth: maxTitleWidth,
              lineHeight: 1,
              fontSize: { xs: "3rem", md: "3.75rem" },
            }}
          >
            {title.split("\n").map((text) => {
              console.log({ text });
              return (
                <Box>
                  <TextWithBold text={text} />
                </Box>
              );
            })}
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
            }}
            gap={2}
          >
            <Description desc={description} />

            <BrowseCTA ctaLink={ctaLink} subCtaLink={subCtaLink} />
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
              width: { xs: "250px", md: "500px" },
              borderRadius: "100%",
              mt: 2,
            }}
          >
            <img
              src={imagePath}
              style={{
                width: "inherit",
                borderRadius: "80%",
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
              mb: 6,
              maxWidth: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Description desc={description} />
            <BrowseCTA ctaLink={ctaLink} subCtaLink={subCtaLink} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ImageText;
