import ImageText from "./ImageText";
import lookingLeft from "../assets/lookingleft.png";

const About = () => {
  return (
    <ImageText
      title={"Who am I, **really**?"}
      description={
        "Woah, digging **deep** now. Fundamentally I am a person driven by **curiosity and self-improvement**. I want to learn more and be able to do more today than I did yesterday. Professionally that means failure is a learning experience. Accept it, write it down, try not make the same mistake again.\n Personally that means I’m full of **fun**, **useless facts**. Did you know that the reason Roman roads are so durable is because they contain a form of lime that can repair itself? Or that birds migrate through actually seeing the Earth’s magnetic field with their eyes?? **WILD**. Oh, to be hermit in a hut somewhere babbling useless information that no one but me cares about.... but, no, we have to participate in “society”"
      }
      imagePath={lookingLeft}
      ctaLink={{
        text: "Wanna hire me now?",
        href: "mailto:alexandercsierra@gmail.com",
      }}
      subCtaLink={{
        subText:
          "No? It was the bird fact, wasn't it? Well, see what else I've done",
        subHref: "/projects",
      }}
      imgStyles={{ filter: "grayscale(100%)", background: "none" }}
    />
  );
};

export default About;
