/* eslint-disable camelcase */
/* eslint-disable import/no-named-as-default-member */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Tab_Optional_Equipment.css";
import { StyleSheet } from "@react-pdf/renderer";
import { Checkbox, Form } from "semantic-ui-react";

import store from "../../store/store";

const css = `
.MuiDataGrid-root .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon {
  opacity: 0;
  font-size: 0;
  transition: opacity 0ms cubic-bezier(0, 0, 0, 0) 0ms;
};
`;

const renderCheckBox = ({ input, label }) => {
  return (
    <Form.Field>
      <Checkbox
        label={label}
        checked={!!input.value}
        onChange={(e, { checked }) => input.onChange(checked)}
      />
    </Form.Field>
  );
};

export default function DataTable() {
  const styles = StyleSheet.create({
    gridcolum: {
      width: "100%",
      height: "100%",
    },
  });

  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "option_name", headerName: " ", width: 850 },
    { field: "option_cost", headerName: "Цена", width: 130 },
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
      <style type="text/css">{css}</style>
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
          rowHeight={26}
          style={styles.gridcolum}
          rows={rows}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50]}
          checkboxSelection
          component={renderCheckBox}
        />
      </div>
    </div>
  );
}
