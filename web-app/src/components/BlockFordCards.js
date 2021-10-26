/* eslint-disable camelcase */
import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import hull_types from "./hull_static/hull_types_specs.json";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   height: "100%",
//   color: theme.palette.text.secondary,
// }));

const css = `
@import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .img_grid {
    border-radius: 0px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    padding: 0px;
    height: 260px;
  }`;

export default function BlockFordCards() {
  return (
    <Box
      sx={{
        width: 616,
        height: 260,
        marginRight: 5,
        flexGrow: 1,
      }}
    >
      <style type="text/css">{css}</style>
      <Grid container spacing={0}>
        <Grid className="img_grid" item sm={9} md={9}>
          <img src={hull_types.pic1} className="main_ford_pic" alt="" />
        </Grid>
        <Grid
          item
          sm={3}
          md={3}
          className="img_grid"
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="stretch"
        >
          <Grid item xs={3}>
            <img src={hull_types.pic2} className="main_ford_pic101" alt="" />
          </Grid>
          <Grid item xs={3}>
            <img
              src={hull_types.pic3}
              className="main_ford_pic102 clarity"
              alt=""
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={hull_types.pic4}
              className="main_ford_pic103 clarity"
              alt=""
            />
          </Grid>
          <Grid item xs={3}>
            <img src="/img/rectangle.jpg" className="rectangle" alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
