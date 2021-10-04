/* eslint-disable */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import "./Optional_equipment.css";

import React from "react";

// eslint-disable-next-line camelcase
function Optional_equipment() {
  return (
    // <body className="">
    <div className="box_specifications">
      <div className="col_optional_equipment" />
      <div className="opt_inf">
        {" "}
        <img src="/img/vector.jpg" className="OptVector" alt="" />
        При добавлении опционального оборудования, цена автомобиля изменится{" "}
      </div>
      <ul>
        <dd>
          <label className="container">
            Кондиционер с ручным управлением
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </dd>
        <dd>
          <label className="container">
            Пакет “Подготовка к эксплуатации”; пластиковые подкрылки (к-т 2 шт);
            подогреватель топливного фильтра; резиновые коврики в кабину;
            антигравийная пленка - угловая вкладка двери R,L, к-т 2 шт;
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </dd>
        <dd>
          <label className="container">
            Комплект пневмоусиления подвески с компрессором
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </dd>
        <dd>
          <label className="container">
            Программируемый предпусковой отопитель с пультом дистанционного
            управления
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </dd>
        <dd>
          <label className="container">
            Пакет улучшения обзорности (электрообогрев лобового стекла, датчик
            уровня омывающей жидкости
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </dd>
        <dd>
          <label className="container">
            Магнитола с громкой связью и кнопками управления на руле
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </dd>
        <dd>
          <label className="container">
            Круиз-контроль и кожаный руль
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </dd>
      </ul>

      <div className="opt_eq_price_value">
        <div className="elems_price_value elem1_price_value">62 317 RUB</div>
        <div className="elems_price_value elem2_price_value">20 000 RUB</div>
        <div className="elems_price_value elem3_price_value">45 100 RUB</div>
        <div className="elems_price_value elem4_price_value">150 000 RUB</div>
        <div className="elems_price_value elem5_price_value">70 800 RUB</div>
        <div className="elems_price_value elem6_price_value">200 00 RUB</div>
        <div className="elems_price_value elem7_price_value">200 00 RUB</div>
      </div>

      <div className="opt_eq_price">Цена</div>

      <div className="width w1" />
      <div className="width w2" />
      <div className="width w3" />
      <div className="width w4" />
      <div className="width w5" />
      <div className="width w6" />
      <div className="width w7" />
      <div className="width w8" />
    </div>
  );
}

export default Optional_equipment;
