/* eslint-disable */
// /* eslint-disable react/no-this-in-sfc */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Optional_equipment from "../optional_equipment/Optional_equipment";
import TotalCarValue from "../total-car-value/Total-car-value";
import "./Picking_switch.css";
import Basic_Options from "../basic_options/Basic_Options";

function Picking_switch() {
  return (
    <div className="App">
      <div className="tabs">
        <div id="content-1"><Basic_Options /></div>
        <div id="content-2">
          <Optional_equipment />
          <TotalCarValue />
        </div>
        <div id="content-3">Содержимое 3...</div>

        <div className="tabs__links">
          <a className="tabs__links_1" href="#content-1">
            Базовая комплектация
          </a>
          <a className="tabs__links_2" href="#content-2">
            Опциональное оборудование
          </a>
          <a className="tabs__links_3" href="#content-3">
            Тип транспортного средства
          </a>
        </div>
        <col className="tabs_line" />
      </div>
    </div>
  );
}

export default Picking_switch;
