/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./TabRequestExecution.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Позиция", headerName: "Позиция", width: 160 },
  { field: "Цена", headerName: "Цена", width: 160 },
];


const rows = [
  { id: 1, Позиция: "Позиция 1", Цена: "20 000 USD"},
  { id: 2, Позиция: "Позиция 3", Цена: "20 000 USD" },
  { id: 3, Позиция: "Позиция 4", Цена: "20 000 USD" },
  { id: 4, Позиция: "Позиция 7", Цена: "20 000 USD" },
  { id: 5, Позиция: "Позиция 10", Цена: "20 000 USD" },
  { id: 6, Позиция: "Позиция 11", Цена: "20 000 USD" },
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
