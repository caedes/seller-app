import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Header from "../components/Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      MAIN
    </ThemeProvider>
  );
}
