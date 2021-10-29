import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
// import hull_types from "./hull_static/hull_types_specs.json";

const css = `
@import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .img_grid {
    border-radius: 0px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    padding: 0px;
    height: 260px;
  }
  .ford_pic{
    display: grid;
    max-height: 100%;
    max-width: 100%;
  }
  .ford_pic101{
    display: grid;
    height: 100%;
    width: 100%;
  }
  .ford_pic102{
    display: grid;
    height: 100%;
    width: 100%;
  }
  .ford_pic103{
    display: grid;
    height: 100%;
    width: 100%;   
  }
  .css-139aahe-MuiGrid-root>.MuiGrid-item {
    max-width: 100%;
}
.css-usqwzk-MuiGrid-root {
    flex-basis: 20%;
    max-width: 21%;
}`;

export default function BlockFordCards() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
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
          <img src="/img/main_pic1.jpg" className="ford_pic" alt="" />
        </Grid>
        <Grid
          item
          sm={3}
          md={3}
          className="img_grid"
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid
            item
            xs={1}
            maxWidth="100%"
            onClick={handleNext}
            disabled={activeStep === 2}
          >
            <img src="/img/main_pic101.jpg" className="ford_pic101" alt="" />
          </Grid>
          <Grid
            item
            xs={1}
            maxWidth="100%"
            onClick={handleNext}
            disabled={activeStep === 1}
          >
            <img src="/img/main_pic102.jpg" className="ford_pic102" alt="" />
          </Grid>
          <Grid
            item
            xs={1}
            maxWidth="100%"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <img src="/img/main_pic103.jpg" className="ford_pic103" alt="" />
          </Grid>
          <Grid item xs={1} maxWidth="100%">
            <MobileStepper
              height="100%"
              variant="dots"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: "100%", flexGrow: 1 }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 2}
                >
                  Next
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
