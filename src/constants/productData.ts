import reactProduct from "../assets/react-product.svg";
import payment from "../assets/payment copy.png";

export const products = [
  {
    id: "payments",
    name: "End to End Payments",
    image: "stripe",
    subtitle: "Total Stripe integration",
    price: 12.65,
    category: "product",
    description:
      "Need to integrate payments into your site? Whether it's Shopify, Stripe, or any other payment platform, I've got you covered.",
  },
  {
    id: "ai",
    name: "AI-Powered Content Generation",
    image: "stripe",
    subtitle: "Use LLMs to power your next app",
    price: 12.65,
    category: "product",
    description:
      "Need to generate content at scale? I've got experience with leveraging LLMs to generate content for your app.",
  },
  {
    id: "react",
    name: "React",
    image: "react",
    subtitle: "Beautiful, responsive frontends",
    price: 12.65,
    category: "frontend",
    description:
      "State management, custom hooks, and reusable components. I've got the skills to build your next project.",
  },
  {
    id: "jest",
    name: "Jest",
    image: "react",
    subtitle: "Don't wonder if that broke anything",
    price: 12.65,
    category: "frontend",
    description:
      "Unit testing, integration testing, and snapshot testing. I've got the skills to build your next project.",
  },

  {
    id: "es6",
    name: "ES6",
    image: "es6",
    subtitle: "Modern syntax for modern projects",
    price: 35.25,
    category: "frontend",
    description:
      "Modern JavaScript is the foundation of any web project. I've got the skills to build your next project.",
  },
  {
    id: "node",
    name: "Node JS",
    image: "node",
    subtitle: "Skills in frontend react",
    price: 122.65,
    category: "backend",
    description:
      "RESTful APIs, authentication, and database management. I've got the skills to build your next project.",
  },
  {
    id: "graphql",
    name: "GraphQL",
    image: "graphql",
    subtitle: "Queries, mutations, resolvers, oh my!",
    price: 54.88,
    category: "backend",
    description:
      "Want only some of the data? GraphQL is the answer. I've got the skills to build your next project.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    image: "typescript",
    subtitle: "Queries, mutations, resolvers, oh my!",
    price: 33.99,
    category: "frontend",
    description:
      "Once you've used TypeScript, it's hard to go back. I've got the skills to build your next project.",
  },
  {
    id: "mongodb",
    name: "MongoDB/Mongoose",
    image: "typescript",
    subtitle: "Databases you can depend on",
    price: 33.99,
    category: "backend",
    description:
      "Need a database that can scale with your app? I've got the skills to build your next project.",
  },
  {
    id: "jest",
    name: "Jest",
    image: "react",
    subtitle: "Keeping data flowing smoothly",
    price: 12.65,
    category: "backend",
    description:
      "Unit testing, integration testing - let's make sure our uptime stays high.",
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
