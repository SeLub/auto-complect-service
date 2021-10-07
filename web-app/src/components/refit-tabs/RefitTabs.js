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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
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
  .tabs{
    color: #2D96CD;
  }
  .MuiTabs-indicator{
    color: #2D96CD; 
  }
  .tab1{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 12px 20px 12px 20px;
    margin-right: 120px;
  }
  .tab2{
    font-family: "Ford Antenna";
    color: #717171;
    padding: 12px 20px 12px 20px;
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
            className="tabs"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
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
              label="Опции переоборудования"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <RefitTabs value={value} index={0} dir={theme.direction}>
            Базовая комплектация(текст)
          </RefitTabs>
          <RefitTabs value={value} index={1} dir={theme.direction}>
            Опциональное оборудование(текст)
          </RefitTabs>
        </SwipeableViews>
      </Box>
    </div>
  );
}
