import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";

const css = `
@import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .goto_commercial-proposal_btn_wrapper {
   width: 100%;
   margin-right: 0px;
   margin-left : 47px;
  
    
  }
  .gotoCom {
    display: flex;
    justify-content: center;
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
    <div className="">
      <style type="text/css">{css}</style>
      <Stack className="goto_commercial-proposal_btn_wrapper" direction="row">
        <Button
          className="gotoCom"
          fullWidth
          variant="contained"
          onClick={() => handleClick()}
        >
          Перейти к оформлению КП
        </Button>
      </Stack>
    </div>
  );
};

export default GotoCommercialProposalBtn;
