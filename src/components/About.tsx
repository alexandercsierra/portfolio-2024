import ImageText from "./ImageText";
import lookingLeft from "../assets/lookingleft-min.png";
import alexCartoon from "../assets/cartoonAlex.png";
import kirbyHat from "../assets/kirbyhat.png";

const About = () => {
  return (
    <ImageText
      title={"Who am I, **really**?"}
      description={
        "I'm a **Software Engineer** with **5** years of experience in the industry building complex, **real-world** web applications for **real users**. Primarily using a stack of Next.JS, React, and Node. \n I am a **tinkerer** at heart. I love to come up with ideas to optimize little things in life that didn't need it, really. Spend way too much time designing a **3D** model for it, then printing out **iteration after iteration** until it turns out **just right**. I also enjoy winding down with a cozy video game or a good book with my cats **Jasper** and **Cinnamon**."
      }
      imagePath={kirbyHat}
      ctaLink={{
        text: "Reviews",
        href: "/testimonials",
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
