/* eslint-disable */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-cycle */
// import { useHistory } from "react-router-dom";
import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import Configurator from "../../components/Configurator";
// import Basic_Options from "../../components/Basic_Options";
import Block_ford_cards from "../../components/Block_ford_cards";
import Picking_switch from "../../components/picking_switch/Picking_switch";
import store from "../../store/store";
// import hull_types from "../../components/hull_static/hull_types_specs.json";

export default function configurator_p1() {
  const hull_types = store.getState();
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      <Configurator />
      <div className="App">
        <Block_ford_cards hull_types={hull_types.hullTypes} />
      </div>
      <Picking_switch />
      {/* <Basic_Options hull_types={hull_types.base_options} /> */}
    </>
  );
}
