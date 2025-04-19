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
import Testimonials from "./pages/Testimonials.tsx";
import Contact from "./pages/Contact.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      // { path: "/cart", element: <Cart /> },
      { path: "/projects", element: <Projects /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/resume", element: <Resume /> },
      { path: "/product/:productId", element: <ProductPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      // { path: "/store", element: <Store /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#584DB9",
      dark: "#2b668e",
    },
    secondary: {
      main: "#1F2122",
    },
    text: {
      primary: "#E4E4E4",
    },
  },
  typography: {
    fontFamily: "Nunito,sans-serif",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </SnackbarProvider>
  </StrictMode>
);
