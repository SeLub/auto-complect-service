/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-named-as-default-member */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Tab_Optional_Equipment.css";
import { StyleSheet } from "@react-pdf/renderer";
import { connect } from "react-redux";
import store, { dispatch } from "../../store/store";

const mapStateToProps = (state) => {
  return {
    additional_options: state.hullTypes.additional_options,
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
    { field: "option_name", headerName: "Позиция", width: 700 },
    { field: "option_cost", headerName: "Цена", width: 140 },
    {
      field: "option_cost_currency",
      headerName: " ",
      width: 100,
    },
  ];
  const [select, setSelection] = React.useState([]);
  function handleClick(selectedRow) {
    // const selectedRowArray =
    setSelection(selectedRow);
    console.log(select.length);
    const selectedRowArray = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < select.length + 1; i++) {
      selectedRowArray.push(props.additional_options.at(select[i]));
    }
    dispatch({
      type: "additionalOptions/set",
      additional_options: selectedRowArray,
    });
  }
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
