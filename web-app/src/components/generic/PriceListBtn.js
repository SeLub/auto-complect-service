import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";

const css = `
@import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .price_list_btn{
    width: 213px;
    height: 43px;
    border-radius: 0px;
    border: 1px solid #2d96cd;
    box-sizing: border-box;
    background-color: white;
    color: #2D96CD;
    font-family: "Ford Antenna";
    text-transform: unset;
    font-size: 16px;
    line-height: 22px;
  }`;

export default function OutlinedButtons(props) {
  const history = useHistory();
  function handleClick(hullTypes) {
    history.push({
      pathname: "/PdfPage",
      state: { hullTypes },
    });
  }
  return (
    <Stack direction="row" spacing={2}>
      <style type="text/css">{css}</style>
      <Button
        className="price_list_btn"
        variant="outlined"
        href="#outlined-buttons"
        onClick={() => handleClick(props.hull_types)}
      >
        Прайс лист
      </Button>
    </Stack>
  );
}
