/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import getExRate from "../../functions/currence-ex-rate";
import NextButton from "../generic/Next-btn";
import Price_list_btn from "../generic/Price_list_btn";
import "./Total-car-value.css";

<<<<<<< HEAD
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
      </div>
    );
  }
}
=======
const TotalCarValue = () => {
  const css = `
  @import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .total-car-value_wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 100%;
    position: relative;
    margin: 24px 0px 26px 0px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: right;
    overflow: hidden;
  }
  .total-car-value_h1{
    width: 192px; 
    height: 50px;
    display: flex;
    margin: 0px 60px 0px 0px;
    font-family: "Ford Antenna";
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.1px;
    color: #2D96CD;
    justify-content: flex-end;
  }
.total-car-value_h3{
  width: 126px;
  margin-right: 0px;
  align-self: center;
  line-height: 25px;
  margin-bottom: 0px;
}
.total-car-value1{
    width: 126px;
    height: 25px;
    font-family: Ford Antenna;
    margin: 0px 0px 0px 0px;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    letter-spacing: 0.1px;
    color: #2D96CD;
}
.total-car-value2{
    width: 108px;
    height: 17px;
    font-family: Ford Antenna;
    margin: 0px 0px 0px 18px;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.1px;
    color: #717171;
}
`;
  return (
    <div>
      <style type="text/css">{css}</style>
      <Container className="total-car-value_wrapper">
        <Typography className="total-car-value_h1" variant="h1" paragraph>
          Общая стоимость автомобиля
        </Typography>
        <Typography className="total-car-value_h3" variant="h3" paragraph>
          <p className="total-car-value1">270 950 BYN</p>
          <p className="total-car-value2">7 950 865 RUB</p>
        </Typography>
      </Container>
    </div>
  );
};

export default TotalCarValue;
>>>>>>> origin/dev
