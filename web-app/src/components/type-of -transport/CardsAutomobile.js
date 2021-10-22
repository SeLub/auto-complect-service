import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import TotalCarValue from "../total-car-value/Total-car-value";
import RetoolBtn from "../generic/RetoolBtn";

export default function CardsAutomobile() {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Легковой
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Полное название с описанием комплектации и базы
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
