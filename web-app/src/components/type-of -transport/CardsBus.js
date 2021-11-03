import * as React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import TotalCarValue from "../total-car-value/Total-car-value";
import RetoolBtn from "../generic/RetoolBtn";
import ToggleButtonBus from "./ToggleButtonBus";
import shemeCar from "./19.jpg";

export default function CardsBus() {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent align="left">
        <Typography gutterBottom variant="h5" component="div">
          Автобус
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Полное название с описанием комплектации и базы
        </Typography>
        <Typography variant="body2" color="InfoText">
          Выбор схемы комплектации:
        </Typography>
        <ToggleButtonBus />
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