import reactProduct from "../assets/react-product.svg";
import payment from "../assets/payment copy.png";

export const products = [
  {
    id: "react",
    name: "End to End Payments",
    image: "stripe",
    subtitle: "Total Stripe integration",
    price: 12.65,
    category: "product",
    description:
      "I have worked on a payment platform that allows users to pay for services using their credit card. The platform is built using React, Redux, and TypeScript. I have also worked on the backend using Node.js and Express.js. The platform is integrated with Stripe for payment processing. I have also worked on the admin dashboard that allows the admin to view and manage transactions. The platform is deployed on AWS using EC2 and RDS.",
  },
  {
    id: "es6",
    name: "ES6",
    image: "es6",
    subtitle: "()",
    price: 35.25,
    category: "frontend",
    description:
      "I have worked on a payment platform that allows users to pay for services using their credit card. The platform is built using React, Redux, and TypeScript. I have also worked on the backend using Node.js and Express.js. The platform is integrated with Stripe for payment processing. I have also worked on the admin dashboard that allows the admin to view and manage transactions. The platform is deployed on AWS using EC2 and RDS.",
  },
  {
    id: "node",
    name: "Node JS",
    image: "node",
    subtitle: "Skills in frontend react",
    price: 122.65,
    category: "backend",
    description:
      "I have worked on a payment platform that allows users to pay for services using their credit card. The platform is built using React, Redux, and TypeScript. I have also worked on the backend using Node.js and Express.js. The platform is integrated with Stripe for payment processing. I have also worked on the admin dashboard that allows the admin to view and manage transactions. The platform is deployed on AWS using EC2 and RDS.",
  },
  {
    id: "graphql",
    name: "GraphQL",
    image: "graphql",
    subtitle: "Queries, mutations, resolvers, oh my!",
    price: 54.88,
    category: "backend",
    description:
      "I have worked on a payment platform that allows users to pay for services using their credit card. The platform is built using React, Redux, and TypeScript. I have also worked on the backend using Node.js and Express.js. The platform is integrated with Stripe for payment processing. I have also worked on the admin dashboard that allows the admin to view and manage transactions. The platform is deployed on AWS using EC2 and RDS.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    image: "typescript",
    subtitle: "Queries, mutations, resolvers, oh my!",
    price: 33.99,
    category: "frontend",
    description:
      "I have worked on a payment platform that allows users to pay for services using their credit card. The platform is built using React, Redux, and TypeScript. I have also worked on the backend using Node.js and Express.js. The platform is integrated with Stripe for payment processing. I have also worked on the admin dashboard that allows the admin to view and manage transactions. The platform is deployed on AWS using EC2 and RDS.",
  },
];

export const productIds = products.map((product) => product.id);

export const productImageMap = {
  react: reactProduct,
  es6: reactProduct,
  node: reactProduct,
  graphql: reactProduct,
  typescript: reactProduct,
  stripe: payment,
};
