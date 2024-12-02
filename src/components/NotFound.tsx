// NotFound.tsx
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
      }}
      alt={"Scruffy black and white persian cat, blepping"}
      ctaLink={{ text: "Back to home", href: "/" }}
      subCtaLink={{ subText: "Go to store", subHref: "/store" }}
    />
  );
};

export default NotFound;
