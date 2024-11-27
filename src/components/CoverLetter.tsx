// import { Portfolio } from “www.alexandercsierra.com”

interface PortfolioProps {
  title?: string;
  company?: string;
}

const CoverLetter = ({
  title = "Senior Software Engineer",
  company = "tl;dv",
}: PortfolioProps) => {
  return <Portfolio title={title} company={company} />;
};

export default CoverLetter;

const blue = "5ebcd5";
const purple = "b764b2";
const paleYellow = "e5e89b";
const lightYellow = "eef35a";
const green = "4bbc90";
const white = "e4e4e4";
const darkBlue = "interface";
const orange = "c88570";
const grey = "a1a1a1";
