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
    <div className="App">
    <div className="box_specifications">
    <div className="col_optional_equipment"/>
    <div className="opt_inf"> <img src="/img/vector.jpg" className="OptVector" alt="" />При добавлении опционального оборудования, цена автомобиля изменится </div>       
       <ul>
            <dd>
                <label className="container">Кондиционер с ручным управлением
                   <input type="checkbox" />
                     <span class="checkmark"/>
                </label>
            </dd>
            <dd>
                <label className="container">Пакет “Подготовка к эксплуатации”; пластиковые подкрылки (к-т 2 шт); подогреватель топливного    
                    фильтра; резиновые коврики в кабину; антигравийная пленка - угловая вкладка двери R,L, к-т 2 шт;
                   <input type="checkbox" />
                     <span class="checkmark"/>
                </label>
            </dd>
            <dd>
                <label className="container">Комплект  пневмоусиления подвески с компрессором
                   <input type="checkbox" /> 
                     <span class="checkmark"/>
                </label>
            </dd>
            <dd>
                <label className="container">Программируемый предпусковой отопитель с пультом дистанционного управления
                   <input type="checkbox" />
                     <span class="checkmark"/>
                </label>
            </dd>
            <dd>
                <label className="container">Пакет улучшения обзорности (электрообогрев лобового стекла, датчик уровня омывающей жидкости
                   <input type="checkbox" />
                     <span class="checkmark"/>
                </label>
            </dd>
            <dd>
                <label className="container">Магнитола с громкой связью и кнопками управления на руле
                   <input type="checkbox" />
                     <span class="checkmark"/>
                </label>
            </dd>
            <dd>
                <label className="container">Круиз-контроль и кожаный руль
                   <input type="checkbox" />
                     <span class="checkmark"/>
                </label>
            </dd>
      </ul>
  </div>
  </div>
       

      
	);
}

export default Optional_equipment;