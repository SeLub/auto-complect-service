import * as React from "react";
import { Grid } from "@mui/material";
import CardsCargoPassenger from "./CardsCargoPassenger";
import CardsAutomobile from "./CardsAutomobile";
import CardsBus from "./CardsBus";

export default function СardLayoutTypeTransport() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={1}>
      <Grid item xs={4}>
        <Grid container justifyContent="center">
          <Grid>
            <CardsCargoPassenger />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="center">
          <Grid>
            <CardsAutomobile />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent="center">
          <Grid>
            <CardsBus />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
