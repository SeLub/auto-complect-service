/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import Configurator from "../../components/Configurator";
import BlockFordCardsNext from "../../components/BlockFordCardsNext";
import PickingSwitch from "../../components/picking_switch/PickingSwitch";
import store from "../../store/store";
import CarDescription from "../../components/car-description/CarDescription";

export default function ConfiguratorP1() {
  const box = {
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    width: "100%",
    height: 404,
    marginRight: 5,
    padding: 0,
  };
  const hull_types = store.getState();
  return (
    <div>
      <AppHeader />
      <BreadCrumbs />
      <Configurator />
      <div className="App">
        <CarDescription />
        <BlockFordCardsNext sx={box} hull_types={hull_types.hullTypes} />
      </div>
      <PickingSwitch />
    </div>
  );
}
