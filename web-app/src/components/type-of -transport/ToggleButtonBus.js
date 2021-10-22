import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonBus() {
  const [alignment, setAlignment] = React.useState("10+1");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="10+1">10+1</ToggleButton>
      <ToggleButton value="14+1">14+1</ToggleButton>
      <ToggleButton value="17+1">17+1</ToggleButton>
      <ToggleButton value="17+1">17+1</ToggleButton>
      <ToggleButton value="20+1">20+1</ToggleButton>
    </ToggleButtonGroup>
  );
}
