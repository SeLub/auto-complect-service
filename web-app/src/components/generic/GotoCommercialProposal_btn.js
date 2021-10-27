import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";

const css = `
@import url("http://fonts.cdnfonts.com/css/ford-antenna");
  .print_commercial_offer_stack {
    
  }
  .gotoCom {
    height: 46px;
    width: 300px;
    left: 780px;
    top: -1.5px;
    border-radius: 0px;
    padding: 0px;
    font-family: Ford Antenna;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #FFFFFF;  
    background-color: #2D96CD;
  }`;

const GotoCommercialProposalBtn = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/Configurator_p3");
  }
  return (
    <Stack direction="row">
      <style type="text/css">{css}</style>
      <Button
        fullWidth="true"
        className="gotoCom"
        variant="contained"
        onClick={() => handleClick()}
      >
        Перейти к оформлению КП
      </Button>
    </Stack>
  );
};

export default GotoCommercialProposalBtn;
