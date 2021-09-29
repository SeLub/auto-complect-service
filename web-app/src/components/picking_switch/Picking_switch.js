// /* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Picking_switch.css";

function Picking_switch() {
  return (
    <div className="App">
      <div className="picking_switch_wrapper">
        <ul className="picking_switch_ul">
          <a className="picking_switch_a" aria-current="page" href="#">
            Базовая комплектация
          </a>

          <a className="picking_switch_a" href="#">
            Опциональное оборудование
          </a>

          <a className="picking_switch_a" href="#">
            Тип транспортного средства
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Picking_switch;
