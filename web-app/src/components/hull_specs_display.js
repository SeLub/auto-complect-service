import react from 'react';
import Price_list_btn from './Price_list_btn';
import hull_types from './hull_types_specs.json'
import Configurator_btn from './Configurator_btn';
import Hull_spec_prices from './Hull_spec_prices';

// todo: получше продумать наименования классов


export default function Hull_specs_display() {
   return(
        <div className = "hull_specs_display_wrapper">
             {/* тут код проходит по json'у и подтягивает все хранящиеся там объекты 
             при это не важно сколько корпусов внесено в базу*/}
            {hull_types.map((hull_types, index) => {
            return(
            <div>
                <div className = "hull_specs_display_details_wrapper">
                    <p className = "hull_specs_display_details">
                        Детали
                    </p>
                    {/* передает переменные для расчета цены */}
                    <Hull_spec_prices base_price = {hull_types.base_price} base_price_currency = {hull_types.base_price_currency}/>
                    
                </div>
                <div className = "hull_specs_display_details_separator"></div>
                {/* перечисление всех характеристик из json'a
                на будущее добавить ошибку или скрытие строк при отсутствии каких либо характеристик*/}
                <ol key={index} className = "specs_display_list">
                    <ul><p className = "hull_spec_type">Тип Двигателя</p> <p className = "hull_spec_content">{hull_types.engine}</p></ul>
                    <ul><p className = "hull_spec_type">Тип топлива</p> <p className = "hull_spec_content">{hull_types.fuel_type}</p></ul>
                    <ul><p className = "hull_spec_type">Трансмиссия</p> <p className = "hull_spec_content">{hull_types.transmission}</p></ul>
                    <ul><p className = "hull_spec_type">Салон</p> <p className = "hull_spec_content">{hull_types.interior}</p></ul>
                    <ul><p className = "hull_spec_type">Тип привода</p> <p className = "hull_spec_content">{hull_types.drive_type}</p></ul>
                    <ul><p className = "hull_spec_type">Мощность двигателя</p> <p className = "hull_spec_content">{hull_types.engine_power}</p></ul> 
                </ol>
                <div className = "hull_specs_display_buttons">
                {/* кнопка для прйс-листа. Пока бесполезна */}
                    <Price_list_btn />
                    {/* передает текущий объект в кнопку для конфигуратора (при нажатии на кнопку
                        в консоль выведет текущий объект) */}
                    <Configurator_btn hull_types = {hull_types}/>
                </div>
            </div>
            );
            })}
        </div>
   )
}