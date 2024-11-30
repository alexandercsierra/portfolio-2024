import { Provider } from "react-redux";
import store from "./redux/store.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Cart from "./pages/Cart.tsx";
import Projects from "./Projects.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layout";
import Resume from "./Resume.tsx";
import ProductPage from "./components/ProductPage.tsx";
import About from "./components/About.tsx";
import Store from "./components/Store.tsx";
import NotFound from "./components/NotFound.tsx";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/cart", element: <Cart /> },
      { path: "/projects", element: <Projects /> },
      { path: "/resume", element: <Resume /> },
      { path: "/product/:productId", element: <ProductPage /> },
      { path: "/about", element: <About /> },
      { path: "/store", element: <Store /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SnackbarProvider>
  </StrictMode>
);
