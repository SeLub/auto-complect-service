import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonAutomobile() {
  const [alignment, setAlignment] = React.useState("8+1");

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
      <ToggleButton value="8+1">8+1</ToggleButton>
      <ToggleButton value="8+1">8+1</ToggleButton>
      <ToggleButton value="8+1">8+1</ToggleButton>
    </ToggleButtonGroup>
  );
}
