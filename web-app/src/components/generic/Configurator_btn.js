/* eslint-disable */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React from "react";
import configuraror_p1 from "../../pages/configurator_p1/configurator_p1";

// компонент для перехода на следующую страницу для оформления КП
// Через пропсы в компонент передаётся объект hull_types, который хранит в себе данные о кузове
// на 14.09.2021 в объекте хранятся только самые базовые характеристики кузова
// потенциально можно в него можно включить базовые и доп. опции для оснащения



export default function Configurator_btn(props) {
  const [currentView, setCurrentView] = React.useState("view1")
  return (
    // фукционала пока нет, при нажатии выводит данные по текщему кузову в консоль
    <button
      className="configurator_btn"
      onClick={event =>  window.location.href='../../pages/configurator_p1/configurator_p1'}
    >
      <p>Конфигуратор</p>
    </button>
  );
}

function configurator_page_switch() {

}
