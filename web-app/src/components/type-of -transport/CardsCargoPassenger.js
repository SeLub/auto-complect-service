import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import TotalCarValue from "../total-car-value/Total-car-value";
import RetoolBtn from "../generic/RetoolBtn";

export default function CardsCargoPassenger() {
  return (
    <Card sx={{ minWidth: 360 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Грузопассажирский
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Грузопассажирский автомобиль 5+1 на базе L2H2
        </Typography>
        <Typography variant="body2" color="InfoText">
          Выбор схемы комплектации:
        </Typography>
        <Box>
          <TotalCarValue />
          <RetoolBtn />
        </Box>
      </CardContent>
    </Card>
  );
}
