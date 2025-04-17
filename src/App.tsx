import Homepage from "./components/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4BB2F9",
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

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Homepage />
    // </ThemeProvider>
  );
}

export default App;
