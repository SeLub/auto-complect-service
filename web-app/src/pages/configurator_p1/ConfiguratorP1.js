/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import Configurator from "../../components/Configurator";
import BlockFordCards from "../../components/BlockFordCards";
import PickingSwitch from "../../components/picking_switch/PickingSwitch";
import store from "../../store/store";

export default function ConfiguratorP1() {
  const hull_types = store.getState();
  return (
    <div>
      <AppHeader />
      <BreadCrumbs />
      <Configurator />
      <div className="App">
        <BlockFordCards hull_types={hull_types.hullTypes} />
      </div>
      <PickingSwitch />
    </div>
  );
}
