import React from "react";
import { dispatch } from "../../store/store";

export default function PriceListBtn() {
  return (
    // функионала пока нет(и будет ли)
    <button
      className="price_list_btn"
      onClick={() => dispatch({ type: "test" })}
      type="button"
    >
      <p>Прайс лист</p>
    </button>
  );
}
