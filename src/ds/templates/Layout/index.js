import { Outlet } from "react-router-dom";
import { Header, Menu } from "../../molecules";

const items = [
  { name: "Produits", route: "/" },
  { name: "Commandes", route: "/commandes" },
  { name: "Finance", route: "/finance" },
  { name: "Rapports", route: "/rapports" },
  { name: "Messages", route: "/messages" },
  { name: "Marketplaces", route: "/marketplaces" },
];

export default function Layout() {
  return (
    <>
      <Header title="Marjane" caption="Bienvenue" />
      <Menu items={items} />
      <Outlet />
    </>
  );
}
