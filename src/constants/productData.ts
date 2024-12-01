import reactProduct from "../assets/react-product.svg";
import payment from "../assets/payment copy.png";

export const products = [
  {
    id: "payments",
    name: "End to End Payments",
    image: "stripe",
    subtitle: "Total Stripe integration",
    price: 99.95,
    category: "product",
    description:
      "Need to integrate payments into your site? Whether it's Shopify, Stripe, or any other payment platform, I've got you covered.",
  },
  {
    id: "analytics",
    name: "Comprehensive Analytics",
    image: "stripe",
    subtitle: "Understand user behavior, experiment and grow",
    price: 79.95,
    category: "product",
    description:
      "Need to integrate payments into your site? Whether it's Shopify, Stripe, or any other payment platform, I've got you covered.",
  },
  {
    id: "ai",
    name: "AI-Powered Content Generation",
    image: "stripe",
    subtitle: "Use LLMs to power your next app",
    price: 59.99,
    category: "product",
    description:
      "Need to generate content at scale? I've got experience with leveraging LLMs to generate content for your app.",
  },
  {
    id: "feature",
    name: "Full Feature Development",
    image: "stripe",
    subtitle: "From ideation to deployment",
    price: 59.99,
    category: "product",
    description:
      "Need to generate content at scale? I've got experience with leveraging LLMs to generate content for your app.",
  },
  {
    id: "google",
    name: "Google Apps Script",
    image: "stripe",
    subtitle: "Manage your data with Google sheets!",
    price: 38.95,
    category: "product",
    description:
      "Need to generate content at scale? I've got experience with leveraging LLMs to generate content for your app.",
  },
  {
    id: "react",
    name: "React",
    image: "react",
    subtitle: "Beautiful, responsive frontends",
    price: 34.65,
    category: "frontend",
    description:
      "State management, custom hooks, and reusable components. I've got the skills to build your next project.",
  },
  {
    id: "redux",
    name: "Redux",
    image: "react",
    subtitle: "State management for the whole family",
    price: 53.24,
    category: "frontend",
    description:
      "State management, custom hooks, and reusable components. I've got the skills to build your next project.",
  },
  {
    id: "jest",
    name: "Jest",
    image: "react",
    subtitle: "Don't wonder if that broke anything",
    price: 299.99,
    category: "frontend",
    description:
      "Unit testing, integration testing, and snapshot testing. I've got the skills to build your next project.",
  },

  {
    id: "es6",
    name: "ES6",
    image: "es6",
    subtitle: "Modern syntax for modern projects",
    price: 42.05,
    category: "frontend",
    description:
      "Modern JavaScript is the foundation of any web project. I've got the skills to build your next project.",
  },
  {
    id: "node",
    name: "Node JS",
    image: "node",
    subtitle: "JS, not just for frontend anymore!",
    price: 85.68,
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
    subtitle: "No, any is not a real type",
    price: 33.99,
    category: "frontend",
    description:
      "Once you've used TypeScript, it's hard to go back. I've got the skills to build your next project.",
  },
  {
    id: "mongodb",
    name: "MongoDB/Mongoose",
    image: "typescript",
    subtitle: "NoSQL, no problem",
    price: 42.42,
    category: "backend",
    description:
      "Need a database that can scale with your app? I've got the skills to build your next project.",
  },
  {
    id: "postgres",
    name: "Postgres",
    image: "typescript",
    subtitle: "Sometimes you need a little more structure",
    price: 64.99,
    category: "backend",
    description:
      "Need a database that can scale with your app? I've got the skills to build your next project.",
  },

  {
    id: "jestbackend",
    name: "Jest",
    image: "react",
    subtitle: "Don't break the backend either",
    price: 77.32,
    category: "backend",
    description:
      "Unit testing, integration testing - let's make sure our uptime stays high.",
  },
  {
    id: "otherproduct",
    name: "Additional Product Skills",
    image: "react",
    subtitle: "Many more upon request",
    price: 555.55,
    category: "product",
    description:
      "Unit testing, integration testing - let's make sure our uptime stays high.",
  },
  {
    id: "otherfrontend",
    name: "Additional Frontend Skills",
    image: "react",
    subtitle: "Many more upon request",
    price: 555.55,
    category: "frontend",
    description:
      "Unit testing, integration testing - let's make sure our uptime stays high.",
  },
  {
    id: "otherproduct",
    name: "Additional Backend Skills",
    image: "react",
    subtitle: "Many more upon request",
    price: 555.55,
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
