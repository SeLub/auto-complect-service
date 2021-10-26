/* eslint-disable */
import * as React from "react";
import { Typography, Container } from "@material-ui/core";

const Text = () => {
  const css = `
  @import url("http://fonts.cdnfonts.com/css/ford-antenna");
  .text_wrapper {
    width: 550px;
    position: "relative";
    margin: 40px 120px 54px 0px;
  }
  .text_h1{
    display: flex;
    flex-direction: row;
    text-align: start;
    margin: 0px 0px 2px 0px;
    font-family: "Ford Antenna";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: #2D96CD;
  }
  .MuiContainer-root MuiContainer-maxWidthLg text_wrapper css-1oqqzyl-MuiContainer-root{
    padding: 0px;
  }
  .css-1oqqzyl-MuiContainer-root{
    padding-left: 0px; 
    padding-right: 0px;
  }
  .text_h2{
    text-align: start;
    margin: 8px 0px 48px 0px;
    font-family: "Ford Antenna";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #2D96CD;
  }
  .text_h3{
    text-align: start;    ;
    margin: 0px 0px 20px 0px;
    font-family: "Ford Antenna";
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #717171;
  }
  .p{
      margin: 0px;
  }
  .MuiContainer-root {
    padding-left: 0px;
    padding-right: 24px;
  }`;
  return (
    <div className="App">
      <style type="text/css">{css}</style>
      <Container className="text_wrapper">
        <Typography className="text_h1" variant="h1" paragraph>
          Грузопассажирский
        </Typography>
        <Typography className="text_h1" variant="h1" paragraph>
          FORD TRANSIT L2H2 310/350
        </Typography>
        <Typography className="text_h2" variant="h2" paragraph>
          Грузопассажирский автомобиль 5+1 на базе L2H2
        </Typography>
        <Typography className="text_h3" variant="h3" paragraph>
          Цены для юридических лиц и индивидуальных предпринимателей указаны с
          учетом НДС, таможенных платежей и утилизационного сбора.
        </Typography>
        <Typography className="text_h3" variant="h3" paragraph>
          <p className="p">Гарантия на автомобиль</p>
          <p className="p">2 года без ограничения по пробегу</p>
          <p className="p">12 лет от сквозной коррозии кузова</p>
        </Typography>
      </Container>
    </div>
  );
};

export default Text;
