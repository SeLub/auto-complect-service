/* eslint-disable camelcase */
/* eslint-disable import/no-named-as-default-member */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Tab_Optional_Equipment.css";
import { StyleSheet } from "@react-pdf/renderer";
import store from "../../store/store";

export default function DataTable() {
  const styles = StyleSheet.create({
    gridcolum: {
      width: "100%",
      height: "100%",
    },
  });
  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "option_name", headerName: "Позиция", width: 840 },
    { field: "option_cost", headerName: "Цена", width: 140 },
    {
      field: "option_cost_currency",
      headerName: " ",
      width: 100,
    },
  ];

  const rows = store
    .getState()
    .hullTypes.additional_options.map((additional_option) => {
      return additional_option;
    });
  return (
    <div className="BoxTab_Optional_Equipment_Co">
      <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
        <div className="test">
          <img
            alt="info_iconTab_Optional_Equipment"
            src="/img/Vector.jpg"
            className="info_iconTab_Optional_Equipment"
          />
          <div className="Tab_Optional_Equipment_com">
            При добавлении опционального оборудования, цена автомобиля изменится
          </div>
        </div>
        <DataGrid
          style={styles.gridcolum}
          rows={rows}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
