import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { accentColor } from "../constants/colors";
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
      }}
    >
      <Box
        sx={{
          background: accentColor,
          color: "white",
          borderRadius: "25px",
          textTransform: "none",
          fontWeight: "700",
          width: "300px",
          px: 6,
          py: 1,
          mb: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          {text}
        </NavLink>
      </Box>
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
          <Box sx={{ my: 2 }}>
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
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant={"h2"}
            sx={{
              fontWeight: "700",
              textAlign: { xs: "center", md: "left" },
              maxWidth: maxTitleWidth,
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
            {/* <TextWithBold text={title} /> */}
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              maxWidth: maxDescriptionWidth,
            }}
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
          }}
        >
          <Box sx={{ width: { xs: "300px", md: "500px" } }}>
            <img
              src={imagePath}
              style={{
                width: "inherit",
                borderRadius: "80%",
                // border: "1px solid red",
                background: accentColor,
                ...imgStyles,
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Description desc={description} />
            <BrowseCTA ctaLink={ctaLink} subCtaLink={subCtaLink} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ImageText;
