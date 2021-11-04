/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const css = `
  .ford_pic {
    max-height: 100%;
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

function a11yProps(index) {
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

  return (
    <Box sx={props.sx}>
      <style type="text/css">{css}</style>
      <Box sx={{ width: "100%", padding: 0 }}>
        <TabPanel value={value} index={0}>
          <img src={props.hull_types.pic1} className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img src="/img/L3H2/main_pic.png" className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img src={props.hull_types.pic1} className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <img src={props.hull_types.pic1} className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <img src={props.hull_types.pic1} className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <img src={props.hull_types.pic1} className="ford_pic" alt="" />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <img src={props.hull_types.pic1} className="ford_pic" alt="" />
        </TabPanel>
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
        <Tab
          sx={{ width: "100%" }}
          a11yProps={a11yProps(0)}
          value={value}
          component={() => (
            <Button
              sx={{ width: "100%", padding: 0 }}
              onClick={() => setValue(0)}
            >
              <img src={props.hull_types.pic2} className="button_img" alt="" />
            </Button>
          )}
        />
        <Tab
          sx={{ width: "100%" }}
          a11yProps={a11yProps(1)}
          value={value}
          component={() => (
            <Button
              sx={{ width: "100%", padding: 0 }}
              onClick={() => setValue(1)}
            >
              <img src={props.hull_types.pic3} className="button_img" alt="" />
            </Button>
          )}
        />
        <Tab
          sx={{ width: "100%" }}
          a11yProps={a11yProps(2)}
          value={value}
          component={() => (
            <Button
              sx={{ width: "100%", padding: 0 }}
              onClick={() => setValue(2)}
            >
              <img src={props.hull_types.pic3} className="button_img" alt="" />
            </Button>
          )}
        />
        <Tab
          sx={{ width: "100%" }}
          a11yProps={a11yProps(3)}
          value={value}
          component={() => (
            <Button
              sx={{ width: "100%", padding: 0 }}
              onClick={() => setValue(3)}
            >
              <img src={props.hull_types.pic3} className="button_img" alt="" />
            </Button>
          )}
        />
        <Tab
          sx={{ width: "100%" }}
          a11yProps={a11yProps(4)}
          value={value}
          component={() => (
            <Button
              sx={{ width: "100%", padding: 0 }}
              onClick={() => setValue(4)}
            >
              <img src={props.hull_types.pic3} className="button_img" alt="" />
            </Button>
          )}
        />
        <Tab
          sx={{ width: "100%" }}
          a11yProps={a11yProps(5)}
          value={value}
          component={() => (
            <Button
              sx={{ width: "100%", padding: 0 }}
              onClick={() => setValue(5)}
            >
              <img src={props.hull_types.pic3} className="button_img" alt="" />
            </Button>
          )}
        />
        <Tab
          sx={{ width: "100%" }}
          a11yProps={a11yProps(6)}
          value={value}
          component={() => (
            <Button
              sx={{ width: "100%", padding: 0 }}
              onClick={() => setValue(6)}
            >
              <img src={props.hull_types.pic3} className="button_img" alt="" />
            </Button>
          )}
        />
      </Tabs>
    </Box>
  );
}
