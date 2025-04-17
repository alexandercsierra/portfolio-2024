import ImageText from "./ImageText";
import lookingLeft from "../assets/lookingleft-min.png";
import alexCartoon from "../assets/cartoonAlex.png";
import kirbyHat from "../assets/kirbyhat.png";

const About = () => {
  return (
    <ImageText
      title={"Who am I, **really** ?"}
      description={
        "I'm a **Software Engineer** with **5** years of experience in the industry building complex, real-world web applications for real users. \n Whether you're a company looking for a full stack dev or a small business looking to build a website, feel free to reach out. Let's see what we can build together!"
      }
      imagePath={kirbyHat}
      ctaLink={{
        text: "Wanna hire me now?",
        href: "mailto:alexandercsierra@gmail.com",
      }}
      subCtaLink={{
        subText:
          "No? It was the bird fact, wasn't it? Well, see what else I've done",
        subHref: "/projects",
      }}
      imgStyles={{
        paddingRight: "50px",
      }}
      alt={"Alex, comically looking left as if he was reading the text"}
    />
  );
};

export default About;
