<<<<<<< HEAD
/* eslint-disable */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
=======
>>>>>>> origin/main
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
<<<<<<< HEAD
import Basic_Options from "../../components/basic_options/Basic_Options";
import Optional_equipment_tab_configurator from "../tab-optional-equipment/Optional_equipment_tab_configurator";
import СardLayoutTypeTransport from "../type-of -transport/СardLayoutTypeTransport";
import TotalCarValue from "../total-car-value/Total-car-value";
import GotoCommercialProposalBtn from "../generic/GotoCommercialProposal_btn";

function RefitTabs(props) {
=======
import "./Picking_switch.css";

function TabPanel(props) {
>>>>>>> origin/main
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

<<<<<<< HEAD
RefitTabs.propTypes = {
=======
TabPanel.propTypes = {
>>>>>>> origin/main
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
<<<<<<< HEAD
RefitTabs.defaultProps = {
=======
TabPanel.defaultProps = {
>>>>>>> origin/main
  children: "",
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}
<<<<<<< HEAD
const css = `
@import url("http://fonts.cdnfonts.com/css/ford-antenna");
  .box {
    background: white;
    width: 1128px;
    position: "relative";
    min-height: 200px;
    margin: 20px 0px 0px 0px;
    border-color: transparent;
  }
  .appbar{
    background: white;
      color: white;
  }
  .MuiTabs-indicator{
    color: #2D96CD; 
  }
  .tab1{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 0px;
    margin: 12px 200px 12px 0px;
  }
  .tab2{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 0px;
    margin: 12px 200px 12px 0px;
  }
  .tab3{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 0px;
    margin: 12px 0px 12px 0px;
  }
  .swipeableviews{
    overflow: hidden
  }
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #2D96CD;
  }
  .css-1aquho2-MuiTabs-indicator {
      background-color: #2D96CD;
}
.css-hip9hq-MuiPaper-root-MuiAppBar-root {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 0%);
}
.css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
    align-items: start;
} 
.css-19kzrtu {
  padding: 24px 0px;
}`;
=======
>>>>>>> origin/main

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="App">
<<<<<<< HEAD
      <style type="text/css">{css}</style>
      <Box className="box">
        <AppBar className="appbar" position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="standard"
            aria-label="action tabs example"
          >
            <Tab
              className="tab1"
=======
      <Box
        className="box"
        sx={{
          bgcolor: "background.paper",
          width: 1128,
          position: "relative",
          minHeight: 200,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            className="tabs"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab
              className="tab"
>>>>>>> origin/main
              label="Базовая комплектация"
              {...a11yProps(0)}
            />
            <Tab
<<<<<<< HEAD
              className="tab2"
=======
              className="tab"
>>>>>>> origin/main
              label="Опциональное оборудование"
              {...a11yProps(1)}
            />
            <Tab
<<<<<<< HEAD
              className="tab3"
=======
              className="tab"
>>>>>>> origin/main
              label="Тип транспортного средства"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
<<<<<<< HEAD
          className="swipeableviews"
=======
>>>>>>> origin/main
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
<<<<<<< HEAD
          <RefitTabs value={value} index={0} dir={theme.direction}>
            <Basic_Options />
          </RefitTabs>
          <RefitTabs value={value} index={1} dir={theme.direction}>
            <Optional_equipment_tab_configurator />
          </RefitTabs>
          <RefitTabs value={value} index={2} dir={theme.direction}>
            <СardLayoutTypeTransport />
            <TotalCarValue />
            <GotoCommercialProposalBtn />
          </RefitTabs>
=======
          <TabPanel value={value} index={0} dir={theme.direction}>
            Базовая комплектация(текст)
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Опциональное оборудование(текст)
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Тип транспортного средства
          </TabPanel>
>>>>>>> origin/main
        </SwipeableViews>
      </Box>
    </div>
  );
}
