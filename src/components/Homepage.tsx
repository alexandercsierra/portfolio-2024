import selfie from "../assets/transprofile-min.png";
import cartoonAlex from "../assets/cartoonAlex.png";
import ImageText from "./ImageText";
import { resumeLink } from "../constants/otherData";
import TestimonialCarousel from "./Carousel";
import Test from "./TestComponent";

const Homepage = () => {
  return (
    <>
      <ImageText
        maxTitleWidth="800px"
        maxDescriptionWidth="725px"
        title={"**Full Stack** Web Developer"}
        description={
          "Hi, I'm Alex 👋🏻 — I've got over 5 years of experience developing web applications in HTML/CSS/JavaScript/React/Next.JS/Node. I love writing code that makes an impact. On users, on companies, on the world. Perpetual learner and keyboard enthusiast (clicky-clack), I am fueled by curiosity and the drive to make a difference."
        }
        ctaLink={{
          text: "See my work",
          href: "/projects",
        }}
        subCtaLink={{
          subText: "Skip the fluff, just tell me what I want to know",
          subHref: resumeLink,
          isExternal: true,
        }}
        imagePath={cartoonAlex}
        alt={"Alex wearing a puffy vest, peering into the sunlight"}
      />
    </>
  );
};

export default Homepage;
