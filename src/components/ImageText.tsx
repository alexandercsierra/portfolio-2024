import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { accentColor } from "../constants/colors";
import selfie from "../assets/transprofile.png";

const BrowseCTA = ({
  ctaLink,
  subCtaLink,
}: {
  ctaLink: { text: string; href: string };
  subCtaLink: { subText: string; subHref: string };
}) => {
  const { text, href } = ctaLink;
  const { subText, subHref } = subCtaLink;
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
      <NavLink to={subHref} style={{ fontSize: ".8rem", color: "black" }}>
        {subText}
      </NavLink>
    </Box>
  );
};

const Description = ({ desc }: { desc: string }) => {
  return <Typography sx={{ my: 4 }}>{desc}</Typography>;
};

const ImageText = ({
  title,
  description,
  ctaLink,
  subCtaLink,
  imagePath,
  imagePos = "right",
}: {
  title: string;
  description: string;
  ctaLink: { text: string; href: string };
  subCtaLink: { subText: string; subHref: string };
  imagePath: string;
  imagePos: "left" | "right";
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "70vh",
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
            sx={{ fontWeight: "700", textAlign: { xs: "center", md: "left" } }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" }, maxWidth: "700px" }}>
            <Description desc={description} />

            <BrowseCTA ctaLink={ctaLink} subCtaLink={subCtaLink} />
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: { xs: "300px", md: "500px" } }}>
            <img
              src={imagePath}
              style={{
                width: "inherit",
                borderRadius: "80%",
                // border: "1px solid red",
                background: accentColor,
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
