import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

export default function ToggleButtonBus() {
  const [alignment, setAlignment] = React.useState("10+1");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.9),
      width: 59,
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
      <ToggleButton value="10+1">10+1</ToggleButton>
      <ToggleButton value="14+1">14+1</ToggleButton>
      <ToggleButton value="17+1">17+1</ToggleButton>
      <ToggleButton value="19+1">19+1</ToggleButton>
      <ToggleButton value="20+1">20+1</ToggleButton>
    </StyledToggleButtonGroup>
  );
}
