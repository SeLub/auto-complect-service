import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const css = `
<<<<<<< HEAD
@import url("http://fonts.cdnfonts.com/css/ford-antenna");
  .table-container {
=======
@import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .table-container-details {
>>>>>>> origin/dev
    background: white;
    border-color: white;
    width: 1128px;
  }
  .css-rorn0c-MuiTableContainer-root {
    overflow-x: hidden;
  }
  .css-ahj2mt-MuiTypography-root {
   margin: 0px; 
  }
  .css-1ygcj2i-MuiTableCell-root {
    text-align:start;
    width: 300px;
    display: table-cell;
    border-bottom: 0px solid rgba(255,255,255);
    padding: 0px 0px 4px 0px;
    font-family: Ford Antenna;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #717171;
  }
  .css-1ex1afd-MuiTableCell-root {
    text-align:start;
    width: 300px !important;
    display: table-cell;
    border-bottom: 0px solid rgba(255,255,255);
    padding: 0px 0px 48px 0px;
    font-family: Ford Antenna;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    rgba(51, 51, 51, 0.12);
}`;

function createData1(engine, fueltype, transmission, colour, deliverytime) {
  return {
    engine,
    fueltype,
    transmission,
    colour,
    deliverytime,
  };
}
function createData2(salon, typeofdrive, enginepower, gearbox) {
  return {
    salon,
    typeofdrive,
    enginepower,
    gearbox,
  };
}

const rows1 = [
  createData1("2,2 TDCi", "Дизель", "М6", "Серый", "Октябрь 2021"),
];
const rows2 = [createData2("2+1", "RWD", "92 кВт/125л.с. ", "6МТ", "")];

export default function Details() {
  return (
    <div>
      <style type="text/css">{css}</style>
      <TableContainer className="table-container">
        <Table sx={{ p: 5, minWidth: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell index={0}>Двигатель</TableCell>
              <TableCell index={1}>Тип топлива</TableCell>
              <TableCell index={2}>Транс-миссия</TableCell>
              <TableCell index={3}>Цвет</TableCell>
              <TableCell index={4}>Срок поставки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row1) => (
              <TableRow key={row1.engine}>
                <TableCell index={0} component="th" scope="row">
                  {row1.engine}
                </TableCell>
                <TableCell index={1}>{row1.fueltype}</TableCell>
                <TableCell index={2}>{row1.transmission}</TableCell>
                <TableCell index={3}>{row1.colour}</TableCell>
                <TableCell index={4}>{row1.deliverytime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cалон</TableCell>
              <TableCell>Тип привода</TableCell>
              <TableCell>Мощность двигателя</TableCell>
              <TableCell>Коробка передач</TableCell>
              <TableCell>{}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row2) => (
              <TableRow key={row2.salon}>
                <TableCell component="th" scope="row">
                  {row2.salon}
                </TableCell>
                <TableCell>{row2.typeofdrive}</TableCell>
                <TableCell>{row2.enginepower}</TableCell>
                <TableCell>{row2.gearbox}</TableCell>
                <TableCell>{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <img
        src="/img/middle-line.jpg"
        className="middle-line"
        alt="middle-line"
      />
    </div>
  );
}
