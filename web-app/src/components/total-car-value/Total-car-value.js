// /* eslint-disable react/jsx-pascal-case */
// /* eslint-disable camelcase */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prefer-stateless-function */
// import React from "react";
// import getExRate from "../../functions/currence-ex-rate";
// import NextButton from "../generic/Next-btn";
// import Price_list_btn from "../generic/Price_list_btn";
// import "./Total-car-value.css";

// // component for calculating the sum of every part of car's configuration;
// export default class TotalCarValue extends React.Component {
//   render() {
//     return (
//       <div className="total-car-value">
//         <div className="label-car-sum">Общая стоимость автомобиля</div>
//         <div className="label-car-sum-byn">270 950 BYN</div>{" "}
//         {/* здесь  будет значение исходя из выбранных позиций и курса НБ */}
//         <div className="label-car-sum-rub">7 950 865 RUB</div>{" "}
//         {/* здесь  будет значение исходя из выбранных позиций в списке */}
//       </div>
//     );
//   }
// }

import * as React from "react";
import { Typography, Container } from "@material-ui/core";

const TotalCarValue = () => {
  const css = `
  @import url("http://fonts.cdnfonts.com/css/ford-antenna");
  .car_cost_including_options_wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 100%;
    position: relative;
    margin: 24px 0px 26px 0px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: left;
    overflow: hidden;
  }
  .car_cost_including_options_h1{
    width: 266px; 
    height: 50px;
    display: flex;
    margin: 0px 50px 0px 0px;
    font-family: "Ford Antenna";
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.1px;
    color: #2D96CD;
    justify-content: flex-start;
    // align-self: center;
  }
.car_cost_including_options_h3{
  width: 126px;
  margin-right: 0px;
  align-self: center;
  line-height: 25px;
  margin-bottom: 0px;
}
// .MuiContainer-root {
//     padding-left: 0px;
//     padding-right: 0px;
// }
.car_cost_including_options1{
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
.car_cost_including_options2{
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
// .MuiTypography-paragraph {
//     margin-bottom: 0px;
// }
// .MuiContainer-root {
//     padding-right: 0px;
// }
`;
  return (
    <div>
      <style type="text/css">{css}</style>
      <Container className="car_cost_including_options_wrapper">
        <Typography
          className="car_cost_including_options_h1"
          variant="h1"
          paragraph
        >
          Общая стоимость автомобиля
        </Typography>
        <Typography
          className="car_cost_including_options_h3"
          variant="h3"
          paragraph
        >
          <p className="car_cost_including_options1">270 950 BYN</p>
          <p className="car_cost_including_options2">7 950 865 RUB</p>
        </Typography>
      </Container>
    </div>
  );
};

export default TotalCarValue;
