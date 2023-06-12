import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../ds/templates";
import {
  CommandesPage,
  ErrorPage,
  ProductsPage,
  ProductPage,
} from "../ds/pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductsPage /> },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "commandes",
        element: <CommandesPage />,
      },
    ],
  },
]);
