/* eslint-disable camelcase */

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";

const css = `
@import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .table-container-details {
    background: white;
    border-color: white;
    width: 1128px;
  }
  .names-table-row {
    display: flex;
    flex-wrap: nowrap;
    width: 1128px;
    flex-direction: row;
    justify-content: space-between;
  }
  .css-rorn0c-MuiTableContainer-root {
    overflow-x: hidden;
  }
  .css-ahj2mt-MuiTypography-root {
   margin: 0px; 
  }
  .names-table-cell{
    text-align:start;
    width: 300px;
    display: table-cell;
    border-bottom: 1px solid rgba(255,255,255);
    padding: 0px 0px 4px 0px;
    font-family: Ford Antenna;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #717171;
  }
  .data-table-cell {
    text-align:start;
    width: 300px;
    display: table-cell;
    border-bottom: 1px solid rgba(255,255,255);
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
      <TableContainer className="table-container-details">
        <Table sx={{ p: 5, minWidth: "100%" }}>
          <TableHead>
            <TableRow className="names-table-row">
              <TableCell className="names-table-cell" sx={{ Width: "300" }}>
                Двигатель
              </TableCell>
              <TableCell className="names-table-cell">Тип топлива</TableCell>
              <TableCell className="names-table-cell">Транс-миссия</TableCell>
              <TableCell className="names-table-cell">Цвет</TableCell>
              <TableCell className="names-table-cell">Срок поставки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row1) => (
              <TableRow className="names-table-row" key={row1.engine}>
                <TableCell
                  className="data-table-cell"
                  component="th"
                  scope="row"
                >
                  {row1.engine}
                </TableCell>
                <TableCell className="data-table-cell">
                  {row1.fueltype}
                </TableCell>
                <TableCell className="data-table-cell">
                  {row1.transmission}
                </TableCell>
                <TableCell className="data-table-cell">{row1.colour}</TableCell>
                <TableCell className="data-table-cell">
                  {row1.deliverytime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className="table-container-details">
        <Table>
          <TableHead>
            <TableRow className="names-table-row">
              <TableCell className="names-table-cell">Cалон</TableCell>
              <TableCell className="names-table-cell">Тип привода</TableCell>
              <TableCell className="names-table-cell" sx={{ Width: "300" }}>
                Мощность двигателя
              </TableCell>
              <TableCell className="names-table-cell">
                Коробка передач
              </TableCell>
              <TableCell className="names-table-cell">{}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row2) => (
              <TableRow
                className="names-table-row"
                key={row2.salon}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className="data-table-cell"
                  component="th"
                  scope="row"
                >
                  {row2.salon}
                </TableCell>
                <TableCell className="data-table-cell">
                  {row2.typeofdrive}
                </TableCell>
                <TableCell className="data-table-cell">
                  {row2.enginepower}
                </TableCell>
                <TableCell className="data-table-cell">
                  {row2.gearbox}
                </TableCell>
                <TableCell className="data-table-cell">{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CardMedia
        component="img"
        alt="middle-line"
        image="/img/middle-line.png"
        className="middle-line"
      />
    </div>
  );
}
