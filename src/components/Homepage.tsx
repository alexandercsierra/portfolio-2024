import selfie from "../assets/transprofile.png";
import ImageText from "./ImageText";
import { resumeLink } from "../constants/otherData";

const Homepage = () => {
  return (
    <ImageText
      maxTitleWidth="500px"
      maxDescriptionWidth="500px"
      title={"Senior **Full Stack** Engineer"}
      description={
        "Hi, I'm Alex 👋🏻 — I love writing code that makes an impact. Perpetual learner and keyboard enthusiast (click-clack), I am fueled by curiosity and snacks."
      }
      ctaLink={{
        text: "Browse Skills Shop =>",
        href: "/store",
      }}
      subCtaLink={{
        subText: "Skip the fluff, just tell me what I want to know",
        subHref: resumeLink,
        isExternal: true,
      }}
      imagePath={selfie}
    />
  );
};

export default Homepage;
