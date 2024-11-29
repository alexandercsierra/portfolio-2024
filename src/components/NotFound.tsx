// NotFound.tsx
import { Link } from "react-router-dom";
import ImageText from "./ImageText";
import jasper from "../assets/jasper.png";

const NotFound = () => {
  return (
    <ImageText
      title={"Oopsie-daisies"}
      description={"Looks like you're lost. Let's get you back on track."}
      imagePath={jasper}
      imgStyles={{
        background: "none",
        borderRadius: "0",
        borderBottomRightRadius: "155px",
        width: "400px",
      }}
      alt={"404"}
      ctaLink={{ text: "Back to home", href: "/" }}
      subCtaLink={{ subText: "Go to store", subHref: "/store" }}
    />
  );
};

export default NotFound;
