import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

export default function ToggleButtonAutomobile() {
  const dispatch = useDispatch();
  const alignment = useSelector((state) => state.toggleBtnAutomobile.alignment);

  const handleChange = () => {
    dispatch({ type: "8+1", payload: "8+1" });
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
      <ToggleButton value="8+1">8+1</ToggleButton>
    </StyledToggleButtonGroup>
  );
}
