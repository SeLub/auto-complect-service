/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import getExRate from "../../functions/currence-ex-rate";
import NextButton from "../generic/Next-btn";
import Price_list_btn from "../generic/Price_list_btn";

// component for calculating the sum of every part of car's configuration;
export default class TotalCarValue extends React.Component {
  render() {
    return (
      <div className="total-car-value">
        <div className="label-car-sum">Общая стоимость автомобиля</div>
        <div className="label-car-sum-byn">270 950 BYN</div>{" "}
        {/* здесь  будет значение исходя из выбранных позиций и курса НБ */}
        <div className="label-car-sum-rub">7 950 865 RUB</div>{" "}
        {/* здесь  будет значение исходя из выбранных позиций в списке */}
        <div>
          <Price_list_btn />
        </div>
        <div>
          <NextButton />
        </div>
      </div>
    );
  }
}
