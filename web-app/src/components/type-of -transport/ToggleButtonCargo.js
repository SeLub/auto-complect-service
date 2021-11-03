/* eslint-disable prettier/prettier */
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

export default function ToggleButtonCargo() {
  const [alignment, setAlignment] = React.useState("5/6+1");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.9),
      width: 100,
      height: 33,
    },
  }));
  return (
    <StyledToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="5/6+1">5/6+1</ToggleButton>
      <ToggleButton value="5/6+1">5/6+1</ToggleButton>
      <ToggleButton value="5/6/8+1">5/6/8+1</ToggleButton>
    </StyledToggleButtonGroup>
  );
}