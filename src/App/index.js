import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Header, Menu } from "../ds/molecules";

const items = [
  { name: "Produits", route: "/products" },
  { name: "Commandes", route: "/commandes" },
  { name: "Finance", route: "/finance" },
  { name: "Rapports", route: "/rapports" },
  { name: "Messages", route: "/messages" },
  { name: "Marketplaces", route: "/marketplaces" },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Marjane" caption="Bienvenue" />
      <Menu items={items} />
      MAIN
    </ThemeProvider>
  );
}
