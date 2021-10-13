/* eslint-disable */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
import Basic_Options from "../../components/basic_options/Basic_Options";
import Optional_equipment from "../../components/optional_equipment/Optional_equipment";
import TotalCarValue from "../../components/total-car-value/Total-car-value";
import Tmp_p3 from "../../components/tmp_components/tmp_p3";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
              label="Базовая комплектация"
              {...a11yProps(0)}
            />
            <Tab
              className="tab2"
              label="Опциональное оборудование"
              {...a11yProps(1)}
            />
            <Tab
              className="tab3"
              label="Тип транспортного средства"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <RefitTabs value={value} index={0} dir={theme.direction}>
            <Basic_Options />
          </RefitTabs>
          <RefitTabs value={value} index={1} dir={theme.direction}>
            <Optional_equipment />
            <TotalCarValue />
          </RefitTabs>
          <RefitTabs value={value} index={2} dir={theme.direction}>
            <Tmp_p3 />
          </RefitTabs>
        </SwipeableViews>
      </Box>
    </div>
  );
}
