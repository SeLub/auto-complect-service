/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from "react";

// компонент для отображения цен в российских и белорусских рублях
// пока что подразумевается отображение базовой цены из "БД" с конвертацией в российские рубли

export default function Hull_spec_prices(props) {
  // конвертация из числа в строку с пробелом каждые 3 символа для отображения на фронте
  // курсы все временные и переменная base_price пока что предполагает, что базовая цена указана в белорусских рублях
  const base_price = props.base_price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const base_price_rub = (props.base_price * 100000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <div>
      <p className="hull_spec_prices_byn">
        Цена от {base_price} {props.base_price_currency}
      </p>
      <p className="hull_spec_prices_rub">от {base_price_rub} RUB</p>
    </div>
  );
}
