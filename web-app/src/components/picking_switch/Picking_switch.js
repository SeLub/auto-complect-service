// /* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Picking_switch() {
  return (
    <div className="picking_switch_wrapper">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Базовая комплектация
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Опциональное оборудование
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Тип транспортного средства
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Picking_switch;
