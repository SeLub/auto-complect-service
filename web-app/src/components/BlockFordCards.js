/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { dispatch } from "../store/store";

const css = `
  .ford_pic {
    max-height: 404px;
    max-width: 100%;
    position: relative;
    padding: 0px;
    border-right: 0px; 
  }
  .button_img{
    height: 100%;
    width: 100%;
  }
  .css-10d9dml-MuiTabs-indicator {
    background-color: white;
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
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
TabPanel.defaultProps = {
  children: "",
};

function a11yprops(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function BlockFordCardsNext(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const colorSelect = (picture) => {
    dispatch({
      type: "color/set",
      color: picture.color,
      source: picture.source,
    });
  };

  return (
    <Box sx={props.sx}>
      <style type="text/css">{css}</style>
      <Box sx={{ width: "100%", padding: 0 }}>
        {props.hull_types.pictures.map((picture, index) => {
          return (
            <TabPanel value={value} index={index}>
              <img src={picture.source} className="ford_pic" alt="" />
            </TabPanel>
          );
        })}
      </Box>
      <Tabs
        className="img_grid"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 0, width: "22%" }}
      >
        {props.hull_types.pictures.map((picture, index) => {
          return (
            <Tab
              sx={{ width: "100%" }}
              a11yprops={a11yprops(index)}
              value={value}
              component={() => (
                <Button
                  sx={{ width: "100%", padding: 0 }}
                  onClick={colorSelect(picture)}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  onClick={() => setValue(index)}
                >
                  <img src={picture.source} className="button_img" alt="" />
                </Button>
              )}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
