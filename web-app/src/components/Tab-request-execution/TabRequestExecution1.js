/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./TabRequestExecution.css";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "Позиция", headerName: "Позиция", width: 886 },
  { field: "Цена", headerName: "Цена", width: 150 },
];


const rows = [
  { id: 1, Позиция: "Кондиционер с ручным управлением", Цена: "62 317 RUB" },
  { id: 2, Позиция: "Кондиционер с ручным управлением", Цена: "62 317 RUB" },
  { id: 3, Позиция: "Пакет “Подготовка к эксплуатации”; пластиковые подкрылки (к-т 2 шт); подогреватель топливного фильтра; резиновые коврики в кабину; антигравийная пленка - угловая вкладка двери R,L, к-т 2 шт;", Цена: "20 000 RUB" },
  { id: 4, Позиция: "Комплект пневмоусиления подвески с компрессором", Цена: "45 100 RUB" },
  { id: 5, Позиция: "Программируемый предпусковой отопитель с пультом дистанционного управления", Цена: "150 000 RUB" },
  { id: 6, Позиция: "Пакет улучшения обзорности (электрообогрев лобового стекла, датчик уровня омывающей жидкости", Цена: "70 800 RUB" },
  { id: 7, Позиция: "Магнитола с громкой связью и кнопками управления на руле", Цена: "6 400 RUB" },
  { id: 8, Позиция: "Круиз-контроль и кожаный руль", Цена: "200 00 RUB" }, 
];

export default function DataTable() {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
