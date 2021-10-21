import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from "@mui/material";

export default function CardsCargoPassenger() {
  return (
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
    </CardContent>
  );
}
