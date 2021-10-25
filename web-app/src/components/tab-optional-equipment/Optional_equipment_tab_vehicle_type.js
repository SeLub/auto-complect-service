/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Tab_Optional_Equipment.css";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Позиция", headerName: "Позиция", width: 466 },
  { field: "Цена", headerName: "Цена", width: 140 },
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
    <div className="BoxTab_Optional_Equipment">
    <div style={{ height: 420, width: 736 }}>
      <div className="Tab_Optional_Equipment">Опции переоборудования</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
    
      />
    </div>
    </div>
  );
}
