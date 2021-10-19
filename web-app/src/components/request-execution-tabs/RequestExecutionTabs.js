/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicOptions from "../basic_options/Basic_Options";
import Details from "../details/Details";
import CarCostIncludingOptions from "../car-cost-including-options/CarCostIncludingOptions";
import SpecialDiscountedPrice from "../special-discounted-price/SpecialDiscountedPrice";
import PrintCommercialOffer from "../generic/PrintCommercialOffer";

function RefitTabs(props) {
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
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </Typography>
  );
}

RefitTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
RefitTabs.defaultProps = {
  children: "",
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}
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
  .tab11{
    width: 1128px; 
    overflow: hidden;
  }
  .MuiTabs-indicator{
    color: #2D96CD; 
  }
  .tab1{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 0px;
    margin: 12px 100px 12px 1px;
  }
  .tab2{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 0px;
    margin: 12px 100px 12px 0px;
  }
  .tab3{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 0px;
    margin: 12px 100px 12px 00px;
  }
  .tab4{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 0px;
    margin: 12px 0px 12px 0px;
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
.css-1wcaknn {
    padding: 32px 0px;
}`;

export default function RequestExecutionTabs() {
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
      <style type="text/css">{css}</style>
      <Box className="box">
        <AppBar className="appbar" position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="standard"
            aria-label="action tabs example"
          >
            <Tab className="tab1" label="Детали" {...a11yProps(0)} />
            <Tab
              className="tab2"
              label="Базовая комплектация"
              {...a11yProps(1)}
            />
            <Tab
              className="tab3"
              label="Опциональное оборудование"
              {...a11yProps(2)}
            />
            <Tab
              className="tab4"
              label="Тип транспортного средства"
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          className="tabs"
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <RefitTabs
            className="tab11"
            value={value}
            index={0}
            dir={theme.direction}
          >
            <Details />
            <CarCostIncludingOptions />
            <SpecialDiscountedPrice />
            <PrintCommercialOffer />
          </RefitTabs>
          <RefitTabs
            className="tab11"
            value={value}
            index={1}
            dir={theme.direction}
          >
            <BasicOptions />
            <CarCostIncludingOptions />
            <SpecialDiscountedPrice />
            <PrintCommercialOffer />
          </RefitTabs>
          <RefitTabs
            className="tab11"
            value={value}
            index={2}
            dir={theme.direction}
          >
            опциональное оборудование(текст)
            <CarCostIncludingOptions />
            <SpecialDiscountedPrice />
            <PrintCommercialOffer />
          </RefitTabs>
          <RefitTabs
            className="tab11"
            value={value}
            index={3}
            dir={theme.direction}
          >
            тип транспортного средства(текст)
            <CarCostIncludingOptions />
            <SpecialDiscountedPrice />
            <PrintCommercialOffer />
          </RefitTabs>
        </SwipeableViews>
      </Box>
    </div>
  );
}
