import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Позиция 1", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Позиция 2", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Позиция 3", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Позиция 4", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Позиция 5", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Позиция 6", firstName: null, age: 150 },
  { id: 7, lastName: "Позиция 7", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Позиция 8", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Позиция 9", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Позиция 10", firstName: null, age: 150 },
  { id: 11, lastName: "Позиция 11", firstName: "Ferrara", age: 44 },
  { id: 12, lastName: "Позиция 12", firstName: "Rossini", age: 36 },
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
