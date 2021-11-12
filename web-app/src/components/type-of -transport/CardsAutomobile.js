/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { connect } from "react-redux";
import TotalCarValue from "../total-car-value/Total-car-value";
import RetoolBtn from "../generic/RetoolBtn";
import ToggleButtonAutomobile from "./ToggleButtonAutomobile";

const mapStateToProps = (state) => {
  return {
    name: state.hullTypes.name,
    alignment: state.toggleBtnAutomobile.alignment,
    schema: state.toggleBtnAutomobile.sourcePic,
  };
};

function CardsAutomobile(props) {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent align="left">
        <Typography gutterBottom variant="h5" component="div">
          Легковой
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Грузопассажирский автомобиль ${props.configurationScheme} на базе ${props.hullTypesName}`}
          ;
        </Typography>
        <Typography variant="body2" color="InfoText">
          Выбор схемы комплектации:
        </Typography>
        <ToggleButtonAutomobile
          configurationScheme={props.configurationScheme}
        />
        <CardMedia
          height="117px"
          weight="310px"
          component="img"
          image={props.schema}
          alt="схема"
        />
        <Box>
          <TotalCarValue />
          <RetoolBtn />
        </Box>
      </CardContent>
    </Card>
  );
}

export default connect(mapStateToProps)(CardsAutomobile);
