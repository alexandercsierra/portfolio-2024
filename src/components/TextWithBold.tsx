import { accentColor } from "../constants/colors";

const TextWithBold = ({ text, delimiter = "**", color = accentColor }) => {
  // Split the text by delimiter
  const parts = text.split(delimiter);

  return (
    <span>
      {parts.map((part, index) => {
        // Even indices are normal text, odd indices are bold
        if (index % 2 === 0) {
          return <span key={index}>{part}</span>;
        } else {
          return (
            <span key={index} style={{ color: color, fontWeight: "bold" }}>
              {part}
            </span>
          );
        }
      })}
    </span>
  );
};

export default TextWithBold;
