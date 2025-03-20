import selfie from "../assets/transprofile-min.png";
import ImageText from "./ImageText";
import { resumeLink } from "../constants/otherData";
import TestimonialCarousel from "./Carousel";

const Homepage = () => {
  return (
    <>
      <ImageText
        maxTitleWidth="500px"
        maxDescriptionWidth="500px"
        title={"Senior **Full Stack** Engineer"}
        description={
          "Hi, I'm Alex 👋🏻 — I love writing code that makes an impact. On users, on companies, on the world. Perpetual learner and keyboard enthusiast (clicky-clack), I am fueled by curiosity and the drive to make a difference."
        }
        ctaLink={{
          text: "Browse Skills =>",
          href: "/store",
        }}
        subCtaLink={{
          subText: "Skip the fluff, just tell me what I want to know",
          subHref: resumeLink,
          isExternal: true,
        }}
        imagePath={selfie}
        alt={"Alex wearing a puffy vest, peering into the sunlight"}
      />
      <TestimonialCarousel />
    </>
  );
};

export default Homepage;
