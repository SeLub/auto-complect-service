/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { CardMedia } from "@mui/material";
import { dispatch, getState } from "../../store/store";

export default function SchemaToggleButton(props) {
  const buttonWidth = Math.min(
    300 / props.reequipment.schemaOptions.length,
    100
  );
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.9),
      width: buttonWidth,
      height: 33,
    },
  }));
  function toggleButtonHandler(toggleButtonValue, schemaOption) {
    dispatch({
      type: `${toggleButtonValue.name}Reequip/set`,
      selectedSitsNum: `${schemaOption.sitsNum}`,
      schemaPicture: `${schemaOption.pic}`,
      reequipBasicOptions: `${schemaOption.reequipBasicOptions}`,
      reequipOptions: `${schemaOption.reequipOptions}`,
    });
  }
  let currentImage = "";
  switch (props.reequipment.name) {
    case "cargo":
      currentImage = getState().toggleBtnCargo.schemaPicture;
      return currentImage;
    case "bus":
      currentImage = getState().toggleBtnBus.schemaPicture;
      return currentImage;
    case "light":
      currentImage = getState().toggleBtnLight.schemaPicture;
      return currentImage;
    default:
      break;
  }
  return (
    <div>
      <StyledToggleButtonGroup
        color="primary"
        value={getState().toggleBtnBus.sitsNum}
        exclusive
      >
        {props.reequipment.schemaOptions.map((schemaOption) => {
          return (
            <ToggleButton
              value={schemaOption.sitsNum}
              onClick={() =>
                toggleButtonHandler(props.reequipment, schemaOption)
              }
            >
              {schemaOption.sitsNum}
            </ToggleButton>
          );
        })}
        ;
      </StyledToggleButtonGroup>
      <CardMedia
        height="117px"
        weight="310px"
        component="img"
        image=""
        alt="схема"
      />
    </div>
  );
}
