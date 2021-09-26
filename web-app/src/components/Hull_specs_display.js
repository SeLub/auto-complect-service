/* eslint-disable */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import React from "react";
import Price_list_btn from "./generic/Price_list_btn";

// hull_types - массив из объектов с характеристиками кузова
import hull_types from "./hull_static/hull_types_specs.json";
import Configurator_btn from "./generic/Configurator_btn";
import Hull_spec_prices from "./Hull_spec_prices";
import Block_ford_cards from "./Block_ford_cards";

// Пояснения к свойствам hull_types:
//
// name - название кузова, String
// engine - объем, компоновка двигателя, String
// fuel_type - тип топлива, String
// transmission - вид трансмиссии, String
// interior - салон, String
// drive_type - вид привода, String
// engine_power - мощность двигателя, String. Пока просто одной строкой, но вероятно может потребоваться разделение части в л.с. и кВт
// base_price - базовая цена, Number. пока что подразумевается указание цены в белорусских рублях
// base_price_currency - указание на валюту базовой цены, String.
//
// Далее идут пока неиспользуемые свойства hull_types, которые могут быть использованы на следующих страницах конфигуратора
// pictures - массив с изображениями кузова, Array. Предполагается, что дефолтное изображение идет с индексом 0
// base_options - Оборудование, в составе базовой комплектации кузова, Array.
// additional_options - Дополнительные опции, Array из Object'ов
//
// У каждого объекта в составе additional_options есть следующие свойства:
// option_index - ID опции, Number.
// option_name - наименование опции для отображения на фронте, String
// option_cost - Стоимость опции, Number
// option_cost_currency - Валюта, в которой указана стоимость в option_cost, Sring

// todo: получше продумать наименования классов

export default function Hull_specs_display() {
  return (
    <div className="hull_specs_display_wrapper">
      {/* тут код проходит по json'у и подтягивает все хранящиеся там объекты 
             при это не важно сколько корпусов внесено в базу */}
      {hull_types.map((hull_types, index) => {
        return (
          <>
          <div className ="hull_desc">
            <p className = "hull_name">{hull_types.name}</p>
            <p className = "hull_type">Цельнометаллический фургон</p>
          </div>
          <div className="cars_display">
            <Block_ford_cards hull_types={hull_types}/>
            <div className = "hull_wrapper">
            
            <div className="hull_specs_display_details_wrapper">
              <div>
                <p className="hull_specs_display_details">Детали</p>
              </div>
              
              {/* передает переменные из свойств hull_types для расчета цены */}
              <Hull_spec_prices
                base_price={hull_types.base_price}
                base_price_currency={hull_types.base_price_currency}
              />
              
              
            </div>
            
            <div className="hull_specs_display_details_separator" />
            
            {/* перечисление всех характеристик из json'a
                на будущее добавить ошибку или скрытие строк при отсутствии каких либо характеристик */}
            <div className="specs_display_list_wrapper">
            <ol key={index} className="specs_display_list">
              <ul>
                <p className="hull_spec_type">Тип Двигателя</p>{" "}
                <p className="hull_spec_content">{hull_types.engine}</p>
              </ul>
              <ul>
                <p className="hull_spec_type">Тип топлива</p>{" "}
                <p className="hull_spec_content">{hull_types.fuel_type}</p>
              </ul>
              <ul>
                <p className="hull_spec_type">Трансмиссия</p>{" "}
                <p className="hull_spec_content">{hull_types.transmission}</p>
              </ul>
              <ul>
                <p className="hull_spec_type">Салон</p>{" "}
                <p className="hull_spec_content">{hull_types.interior}</p>
              </ul>
              <ul>
                <p className="hull_spec_type">Тип привода</p>{" "}
                <p className="hull_spec_content">{hull_types.drive_type}</p>
              </ul>
              <ul>
                <p className="hull_spec_type">Мощность двигателя</p>{" "}
                <p className="hull_spec_content">{hull_types.engine_power}</p>
              </ul>
            </ol>
            </div>
            
            <div className="hull_specs_display_buttons">
              {/* кнопка для прайс-листа. Пока бесполезна */}
              <Price_list_btn />
              {/* передает текущий объект в кнопку для конфигуратора (при нажатии на кнопку
                        в консоль выведет текущий объект) */}
              <Configurator_btn hull_types={hull_types} />
            </div>
          </div>
          </div>
          </>
        );
      })}
    </div>
    
  );
}
