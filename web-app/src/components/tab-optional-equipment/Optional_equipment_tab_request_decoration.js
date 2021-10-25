/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Tab_Optional_Equipment.css";


const columns = [
  { field: "id", headerName: "ID", width: 15 },
  { field: "Описание", headerName: "Описание", width: 940 },
  { field: "Цена", headerName: "Цена", width: 130},
];
           
const rows = [
  { id: 1, Описание: "Пакет “Подготовка к эксплуатации”; пластиковые подкрылки (к-т 2 шт); подогреватель топливного фильтра; резиновые коврики в кабину; антигравийная пленка - угловая вкладка двери R,L, к-т 2 шт;", Цена: "20 000 RUB"},
  { id: 2, Описание: "Программируемый предпусковой отопитель с пультом дистанционного управления", Цена: " 150 000 RUB" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}