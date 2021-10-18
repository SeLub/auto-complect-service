/* eslint-disable */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React from "react";
import configurator_p1 from "../../pages/configurator_p1/configurator_p1";
import { useHistory } from 'react-router-dom';
import hull_types_store from "../../reducers/hull_types_reducer";
import hull_types_reducer from "../../reducers/hull_types_reducer";

// компонент для перехода на следующую страницу для оформления КП
// Через пропсы в компонент передаётся объект hull_types, который хранит в себе данные о кузове
// на 14.09.2021 в объекте хранятся только самые базовые характеристики кузова
// потенциально можно в него можно включить базовые и доп. опции для оснащения



export default function Configurator_btn(props) {
  const history = useHistory();
  function handleClick(hull_types){
    history.push({
      pathname: '/configurator_p1',
      state: {hull_types: hull_types}
    })
    // hull_types_reducer.dispatch(hull_types_reducer({type: 'hull_types/get'}))
    // console.log(hull_types_store.getState())
  }
  return (
    // фукционала пока нет, при нажатии выводит данные по текщему кузову в консоль
    <button
      className="configurator_btn"
      onClick={() => handleClick(props.hull_types)}
    >
      <p>Конфигуратор</p>
    </button>
  );
}


