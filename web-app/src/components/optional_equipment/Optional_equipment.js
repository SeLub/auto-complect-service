/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import "./Optional_equipment.css";

import React from "react";

// eslint-disable-next-line camelcase
function Optional_equipment() {
	return (
    // <body className="">
    <div className="App">
    <div className="box_specifications">
    <div className="col_optional_equipment">Опциональное оборудование</div>
                    
       <ul>
          <p>При добавлении опционального оборудования, цена автомобиля изменится</p>
          
          <dd><input type="checkbox" id="checkbox"  />Кондиционер с ручным управлением</dd>
          <dd><input type="checkbox" id="checkbox"  />Пакет “Подготовка к эксплуатации”; пластиковые подкрылки (к-т 2 шт); подогреватель топливного</dd>
          <dd> фильтра; резиновые коврики в кабину; антигравийная пленка - угловая вкладка двери R,L, к-т 2 шт;</dd>
          <dd><input type="checkbox" id="checkbox"  />Комплект пневмоусиления подвески с компрессором</dd>
          <dd><input type="checkbox" id="checkbox"  />Программируемый предпусковой отопитель с пультом дистанционного управления</dd>
          <dd><input type="checkbox" id="checkbox"  />Пакет улучшения обзорности (электрообогрев лобового стекла, датчик уровня омывающей жидкости</dd>
          <dd><input type="checkbox" id="checkbox"  />Магнитола с громкой связью и кнопками управления на руле</dd>
          <dd><input type="checkbox" id="checkbox"  />Круиз-контроль и кожаный руль</dd>
      </ul>
  </div>
  </div>
       

      
	);
}

export default Optional_equipment;