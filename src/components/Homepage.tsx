import selfie from "../assets/transprofile.png";
import ImageText from "./ImageText";

const Homepage = () => {
  return (
    <ImageText
      title={"Senior Full Stack Engineer"}
      description={
        "4+ years experience working in fast-paced environments on products serving millions of users"
      }
      ctaLink={{
        text: "Browse Skills =>",
        href: "/store",
      }}
      subCtaLink={{
        subText: "Skip the fluff, just tell me what I want to know",
        subHref: "/resume",
      }}
      imagePath={selfie}
    />
  );
};

export default Homepage;
