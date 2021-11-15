/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable import/no-named-as-default-member */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Tab_Optional_Equipment.css";
import { StyleSheet } from "@react-pdf/renderer";
import { connect } from "react-redux";
import store, { dispatch } from "../../store/store";

const css = `
.MuiDataGrid-root .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon {
  opacity: 0;
  font-size: 0;
  transition: opacity 0ms cubic-bezier(0, 0, 0, 0) 0ms;
};

`;

const mapStateToProps = (state) => {
  return {
    additional_options: state.hullTypes.additional_options,
    initialOptions: state.additionalOptions,
  };
};

function DataTable(props) {
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
  const [select, setSelection] = React.useState([]);
  if (typeof props.initialOptions !== "undefined") {
    setSelection(props.initialOptions.map((id) => id));
  }
  console.log(props.initialOptions?.map((initialOption) => initialOption.id));
  function handleClick(selectedRow) {
    setSelection(selectedRow);
    console.log(select.length);
    const selectedRowArray = [];
    for (let i = 0; i < select.length + 1; i += 1) {
      selectedRowArray.push(props.additional_options.at(select[i]));
    }
    dispatch({
      type: "additionalOptions/set",
      additionalOptions: selectedRowArray,
    });
  }
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
          pageSize={100}
          rowsPerPageOptions={[100]}
          checkboxSelection
          disableSelectionOnClick
          selectionModel={select}
          onSelectionModelChange={(newSelect) => {
            handleClick(newSelect);
          }}
        />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(DataTable);
