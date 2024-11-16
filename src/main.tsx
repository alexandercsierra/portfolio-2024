import { Provider } from "react-redux";
import store from "./redux/store.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Cart from "./components/Cart.tsx";
import Projects from "./Projects.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/cart", element: <Cart /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
