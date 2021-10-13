import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name) {
  return { name };
}

const rows = [
  createData(
    "Настил пола (фанера и автолин), установка алюминиевых профилей салона и порогов"
  ),
  createData(
    "Изготовление, монтаж и обшивка глухой перегородки между грузовым и пассажирскими отсеками"
  ),
  createData("Изготовление, оклейка, монтаж боковых панелей (2шт)"),
  createData("Подключение двухрежимных потолочных светильников (1шт)"),
  createData("Установка оконных шторок на 2 окна (серые, черные)"),
  createData("Изготовление, оклейка, монтаж обивок потолка"),
  createData(
    "Оклейка железа стоек пассажирского салона автовелюром (ИК) без оклейки дверей"
  ),
  createData("Установка стекол (2 шт)"),
  createData(
    "Установка пассажирских сидений (4 места нерегулируемые анатомические спинки, 2-х точечные ремни, пр-во РФ)"
  ),
  createData("Установка верхней пластиковой накладки"),
  createData("Сертификация"),
  createData("Крышка бардачка над водительским местом с дверкой"),
  createData(),
];

const css = `
@import url("http://fonts.cdnfonts.com/css/ford-antenna");
.css-19midj6 {
    padding: 16px 0px 0px 0px;
}
.css-dsuxgy-MuiTableCell-root {
    font-family: "Ford Antenna",sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 12px 0px;
    color: #333333;
}
.css-ahj2mt-MuiTypography-root {
  font-family: "Ford Antenna",sans-serif;
}`;

export default function BasicOptionsReEquipment() {
  return (
    <div>
      <style type="text/css">{css}</style>
      <TableContainer component={Paper}>
        <div className="basic_options_note">
          <img src="/img/vector.jpg" className="info_icon" alt="img" />
          <p>Данное оборудование является стандартным в вашей конфигурации</p>
        </div>
        <Table sx={{ maxWidth: 1128 }} size="small" aria-label="a dense table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
