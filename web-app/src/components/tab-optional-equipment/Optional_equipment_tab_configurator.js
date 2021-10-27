/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Tab_Optional_Equipment.css";
import { StyleSheet } from "@react-pdf/renderer";

const columns = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "Позиция", headerName: "Позиция", width: 920 },
  { field: "Цена", headerName: "Цена", width: 140 },
];

const rows = [
  { id: 1, Позиция: "Кондиционер с ручным управлением", Цена: "62 317 RUB" },
  { id: 2, Позиция: "Кондиционер с ручным управлением", Цена: "62 317 RUB" },
  {
    id: 3,
    Позиция:
      "Пакет “Подготовка к эксплуатации”; пластиковые подкрылки (к-т 2 шт); подогреватель топливного фильтра; резиновые коврики в кабину; антигравийная пленка - угловая вкладка двери R,L, к-т 2 шт;",
    Цена: "20 000 RUB",
  },
  {
    id: 4,
    Позиция: "Комплект пневмоусиления подвески с компрессором",
    Цена: "45 100 RUB",
  },
  {
    id: 5,
    Позиция:
      "Программируемый предпусковой отопитель с пультом дистанционного управления",
    Цена: "150 000 RUB",
  },
  {
    id: 6,
    Позиция:
      "Пакет улучшения обзорности (электрообогрев лобового стекла, датчик уровня омывающей жидкости",
    Цена: "70 800 RUB",
  },
  {
    id: 7,
    Позиция: "Магнитола с громкой связью и кнопками управления на руле",
    Цена: "6 400 RUB",
  },
  { id: 8, Позиция: "Круиз-контроль и кожаный руль", Цена: "200 00 RUB" },
];

export default function DataTable() {
  const styles = StyleSheet.create({
    gridcolum: {
      width: "100%",
      height: "100%",
    },
  });
  return (
    <div className="BoxTab_Optional_Equipment_Co">
      <div style={{ height: 750, width: "100%" }}>
        <img
          src="/img/Vector.jpg"
          className="info_iconTab_Optional_Equipment"
        />
        <div className="Tab_Optional_Equipment_com">
          При добавлении опционального оборудования, цена автомобиля изменится
        </div>
        <DataGrid
          style={styles.gridcolum}
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
