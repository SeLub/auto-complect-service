import React from "react";

export default function Hull_spec_prices(props) {
    return(
        <div>
            {/* тут добавить логику для трансфера валюь, если базовая цена не в рублях */}
            <p className = "hull_spec_prices_byn">Цена от {props.base_price} {props.base_price_currency}</p>
            {/* курс временный, пока API не подтянул */}
            <p className = "hull_spec_prices_rub">от {props.base_price*10} RUB</p>
        </div>
    )
}