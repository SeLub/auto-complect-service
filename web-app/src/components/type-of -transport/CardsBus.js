/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import TotalCarValue from "../total-car-value/Total-car-value";
import RetoolBtn from "../generic/RetoolBtn";
import SchemaToggleButton from "./SchemaToggleButton";

export default function CardsBus(props) {
  const hullTypesName = useSelector((state) => state.hullTypes.name);
  const configurationScheme = useSelector(
    (state) => state.toggleBtnBus.alignment
  );

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent align="left">
        <Typography gutterBottom variant="h5" component="div">
          Автобус
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Грузопассажирский автомобиль ${configurationScheme} на базе ${hullTypesName}`}
          ;
        </Typography>
        <Typography variant="body2" color="InfoText">
          Выбор схемы комплектации:
        </Typography>
        <SchemaToggleButton reequipmentOptions={props.reequipmentOptions} />
        <CardMedia
          height="117px"
          weight="310px"
          component="img"
          image=""
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
