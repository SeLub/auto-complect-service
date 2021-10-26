/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React from "react";
import { dispatch } from "../../store/store";

export default function Price_list_btn(props) {
  return (
    // функионала пока нет(и будет ли)
    <button
      className="price_list_btn"
      onClick={() => dispatch({ type: "test" })}
    >
      <p>Прайс лист</p>
    </button>
  );
}
