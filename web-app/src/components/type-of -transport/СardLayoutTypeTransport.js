/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import CardsCargoPassenger from "./CardsCargoPassenger";
import CardsAutomobile from "./CardsAutomobile";
import CardsBus from "./CardsBus";
import CardDisplay from "./CardDisplay";

const mapStateToProps = (state) => {
  return {
    reequipmentOptions: state.hullTypes.reequipmentOptions,
  };
};

function СardLayoutTypeTransport(props) {
  return (
    <Grid sx={{ flexGrow: 1, overflow: "hidden" }} container spacing={1}>
      {props.reequipmentOptions.map((reequipmentOption) => {
        return (
          <Grid item xs={4}>
            <Grid container justifyContent="center">
              <Grid>
                <CardDisplay reequipmentOptions={reequipmentOption} />
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default connect(mapStateToProps)(СardLayoutTypeTransport);
