import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import {
  ConditionProductChip,
  Price,
  ProductImage,
  ProductLink,
} from "../../atoms";
import { useProducts } from "../../../hooks";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: ProductImage,
    sortable: false,
  },
  {
    field: "name",
    headerName: "Produit",
    renderCell: ProductLink,
    width: 350,
  },
  {
    field: "condition",
    headerName: "Condition",
    width: 150,
    renderCell: ConditionProductChip,
  },
  {
    field: "price",
    headerName: "Prix (EUR)",
    width: 150,
    renderCell: Price,
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "Stock disponible à la vente",
    width: 120,
  },
];

export default function ProductsPage() {
  const { isLoading, products } = useProducts();

  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        loading={isLoading}
        columns={columns}
        rows={products}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
