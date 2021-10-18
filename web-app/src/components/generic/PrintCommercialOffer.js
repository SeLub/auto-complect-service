import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const css = `
@import url("http://fonts.cdnfonts.com/css/ford-antenna");
  .print_commercial_offer_stack {
    
  }
  .print_commercial_offer_button{
    height: 46px;
    width: 455px;
    left: 0px;
    top: -1.5px;
    border-radius: 0px;
    padding: 0px;
    font-family: Ford Antenna;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #FFFFFF;  
    background-color: #2D96CD;
  }`;

export default function PrintCommercialOffer() {
  return (
    <div className="car_cost_including_options_wrapper">
      <style type="text/css">{css}</style>
      <Stack className="print_commercial_offer_stack" direction="row">
        <Button
          className="print_commercial_offer_button"
          variant="contained"
          href="#contained-buttons"
        >
          Напечатать Коммерческое Предложение
        </Button>
      </Stack>
    </div>
  );
}
