/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

export default function SchemaToggleButton(props) {
  const dispatch = useDispatch();
  const alignment = useSelector((state) => state.toggleBtnCargo.alignment);

  const handleChange = (event, newAlignment) => {
    dispatch({ type: newAlignment, payload: newAlignment });
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
      {props.reequipment.schemaOptions.map((schemaOption) => {
        return (
          <ToggleButton value={schemaOption.sitsNum}>
            {schemaOption.sitsNum}
          </ToggleButton>
        );
      })}
      ;
    </StyledToggleButtonGroup>
  );
}
