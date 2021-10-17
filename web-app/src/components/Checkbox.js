import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Позиция", headerName: "Позиция", width: 160 },

  {
    field: "Цена",
    headerName: "Цена",
    description: "Цена",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "Позиция") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, Позиция: "Позиция 1" },
  { id: 2, Позиция: "Позиция 2" },
  { id: 3, Позиция: "Позиция 3" },
  { id: 4, Позиция: "Позиция 4" },
  { id: 5, Позиция: "Позиция 5" },
  { id: 6, Позиция: "Позиция 6" },
  { id: 7, Позиция: "Позиция 7" },
  { id: 8, Позиция: "Позиция 8" },
  { id: 9, Позиция: "Позиция 9" },
  { id: 10, Позиция: "Позиция 10" },
  { id: 11, Позиция: "Позиция 11" },
  { id: 12, Позиция: "Позиция 12" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
