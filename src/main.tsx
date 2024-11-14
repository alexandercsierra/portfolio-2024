import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Nav from "./Nav.tsx";
import Projects from "./Projects.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Box sx={{ minHeight: "100vh" }}>
      <Nav />
      <RouterProvider router={router} />
    </Box>
  </StrictMode>
);
