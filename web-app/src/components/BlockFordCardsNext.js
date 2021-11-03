/* eslint-disable react/destructuring-assignment */
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import MobileStepper from "@mui/material/MobileStepper";
// import Button from "@mui/material/Button";

// const css = `
// @import url("https://fonts.cdnfonts.com/css/ford-antenna");
//   .img_grid {
//     border-radius: 0px;
//     box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
//     padding: 0px;
//     height: 260px;
//   }
//   .ford_pic{
//     display: grid;
//     max-height: 100%;
//     max-width: 100%;
//   }
//   .ford_pic101{
//     display: grid;
//     height: 100%;
//     width: 100%;
//   }
//   .ford_pic102{
//     display: grid;
//     height: 100%;
//     width: 100%;
//   }
//   .ford_pic103{
//     display: grid;
//     height: 100%;
//     width: 100%;
//   }
//   .css-139aahe-MuiGrid-root>.MuiGrid-item {
//     max-width: 100%;
// }
// .css-usqwzk-MuiGrid-root {
//     flex-basis: 20%;
//     max-width: 21%;
// }`;

// export default function BlockFordCards() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
//   return (
//     <Box
//       sx={{
//         width: 616,
//         height: 260,
//         marginRight: 5,
//         flexGrow: 1,
//       }}
//     >
//       <style type="text/css">{css}</style>
//       <Grid container spacing={0}>
//         <Grid className="img_grid" item sm={9} md={9}>
//           <img src="/img/main_pic1.jpg" className="ford_pic" alt="" />
//         </Grid>
//         <Grid
//           item
//           sm={3}
//           md={3}
//           className="img_grid"
//           container
//           direction="column"
//           justifyContent="flex-start"
//           alignItems="stretch"
//         >
//           <Grid
//             item
//             xs={1}
//             maxWidth="100%"
//             onClick={handleNext}
//             disabled={activeStep === 2}
//           >
//             <img src="/img/main_pic101.jpg" className="ford_pic101" alt="" />
//           </Grid>
//           <Grid
//             item
//             xs={1}
//             maxWidth="100%"
//             onClick={handleNext}
//             disabled={activeStep === 1}
//           >
//             <img src="/img/main_pic102.jpg" className="ford_pic102" alt="" />
//           </Grid>
//           <Grid
//             item
//             xs={1}
//             maxWidth="100%"
//             onClick={handleBack}
//             disabled={activeStep === 0}
//           >
//             <img src="/img/main_pic103.jpg" className="ford_pic103" alt="" />
//           </Grid>
//           <Grid item xs={1} maxWidth="100%">
//             <MobileStepper
//               height="100%"
//               variant="dots"
//               steps={3}
//               position="static"
//               activeStep={activeStep}
//               sx={{ maxWidth: "100%", flexGrow: 1 }}
//               nextButton={
//                 <Button
//                   size="small"
//                   onClick={handleNext}
//                   disabled={activeStep === 2}
//                 >
//                   Next
//                 </Button>
//               }
//               backButton={
//                 <Button
//                   size="small"
//                   onClick={handleBack}
//                   disabled={activeStep === 0}
//                 >
//                   Back
//                 </Button>
//               }
//             />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const css = `
  .ford_pic {
    max-height: 260px;
    max-width: 100%;
    position: relative;
    padding: 0px;
  }

`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      other={other}
    >
      {value === index && <Box sx={{ p: 3, padding: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function BlockFordCardsNext() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: 616,
        height: 260,
        marginRight: 5,
        padding: 0,
      }}
    >
      <style type="text/css">{css}</style>
      <Box sx={{ width: "100%", padding: 0 }}>
        <TabPanel value={value} index={0}>
          <img src="/img/L2H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img src="/img/L3H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img src="/img/L2H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <img src="/img/L2H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <img src="/img/L2H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <img src="/img/L2H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <img src="/img/L2H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
      </Box>
      <Tabs
        className="img_grid"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab a11yProps={a11yProps(0)} sx={{ width: "100%" }}>
          <img src="/img/main_pic201.jpg" className="" alt="" />
        </Tab>
        <Tab label="Item Two" a11yProps={a11yProps(1)} sx={{ width: "100%" }} />
        <Tab
          label="Item Three"
          a11yProps={a11yProps(2)}
          sx={{ width: "100%" }}
        />
        <Tab
          label="Item Four"
          a11yProps={a11yProps(3)}
          sx={{ width: "100%" }}
        />
        <Tab
          label="Item Five"
          a11yProps={a11yProps(4)}
          sx={{ width: "100%" }}
        />
        <Tab label="Item Six" a11yProps={a11yProps(5)} sx={{ width: "100%" }} />
        <Tab
          label="Item Seven"
          a11yProps={a11yProps(6)}
          sx={{ width: "100%" }}
        />
      </Tabs>
    </Box>
  );
}
