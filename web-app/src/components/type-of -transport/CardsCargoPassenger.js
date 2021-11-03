import * as React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import TotalCarValue from "../total-car-value/Total-car-value";
import RetoolBtn from "../generic/RetoolBtn";
import ToggleButtonCargo from "./ToggleButtonCargo";
import shemeCar from "./19.jpg";

export default function CardsCargoPassenger() {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent align="left">
        <Typography gutterBottom variant="h5" component="div">
          Грузопассажирский
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Грузопассажирский автомобиль 5+1 на базе L2H2
        </Typography>
        <Typography variant="body2" color="InfoText">
          Выбор схемы комплектации:
        </Typography>
        <ToggleButtonCargo />
        <CardMedia
          height="117px"
          weight="310px"
          component="img"
          image={shemeCar}
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