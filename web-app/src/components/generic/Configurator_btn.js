/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React from "react";
import { useHistory } from "react-router-dom";
import { dispatch } from "../../store/store";

// компонент для перехода на следующую страницу для оформления КП
// Через пропсы в компонент передаётся объект hull_types, который хранит в себе данные о кузове
// на 14.09.2021 в объекте хранятся только самые базовые характеристики кузова
// потенциально можно в него можно включить базовые и доп. опции для оснащения

export default function Configurator_btn(props) {
  const history = useHistory();
  // const dispatch = useDispatch()
  function handleClick(hull_types) {
    history.push({
      pathname: "/configurator_p1",
      state: { hull_types },
    });
    dispatch({
      type: "hull_types/set",
      name: props.hull_types.name,
      engine: props.hull_types.engine,
      fuel_type: props.hull_types.fuel_type,
      transmission: props.hull_types.transmission,
      interior: props.hull_types.interior,
      drive_type: props.hull_types.drive_type,
      engine_power: props.hull_types.engine_power,
      base_price: props.hull_types.base_price,
      base_price_currency: props.hull_types.base_price_currency,
      pictures: props.hull_types.pictures,
      base_options: props.hull_types.base_options,
      additional_options: props.hull_types.additional_options,
      pic1: props.hull_types.pic1,
      pic2: props.hull_types.pic2,
      pic3: props.hull_types.pic3,
      pic4: props.hull_types.pic4,
    });
    // hull_types_reducer.dispatch(hull_types_reducer({type: 'hull_types/get'}))
    // console.log(hull_types_store.getState())
  }
  return (
    <button
      className="configurator_btn"
      onClick={() => handleClick(props.hull_types)}
    >
      <p>Конфигуратор</p>
    </button>
  );
}
