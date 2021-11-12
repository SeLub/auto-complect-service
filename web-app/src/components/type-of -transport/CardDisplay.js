/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { connect } from "react-redux";
import TotalCarValue from "../total-car-value/Total-car-value";
import RetoolBtn from "../generic/RetoolBtn";
import SchemaToggleButton from "./SchemaToggleButton";

const mapStateToProps = (state) => {
  return {
    toggleBtnBus: state.toggleBtnBus,
    toggleBtnCargo: state.toggleBtnCargo,
    toggleBtnLight: state.toggleBtnLight,
  };
};

function CardDisplay(props) {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent align="left">
        <Typography gutterBottom variant="h5" component="div">
          {props.reequipmentOptions.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${props.reequipmentOptions.displayName} автомобиль ${props.toggleBtnBus.selectedSitsNum} на базе ${props.hullTypes.name}`}
        </Typography>
        <Typography variant="body2" color="InfoText">
          Выбор схемы комплектации:
        </Typography>
        <SchemaToggleButton
          reequipment={props.reequipmentOptions}
          reequipName={props.reequipmentOptions.name}
          reequipSchemas={props.reequipmentOptions.schemaOptions}
        />
        <Box>
          <TotalCarValue />
          <RetoolBtn />
        </Box>
      </CardContent>
    </Card>
  );
}

export default connect(mapStateToProps)(CardDisplay);
