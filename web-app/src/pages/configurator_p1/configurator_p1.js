/* eslint-disable camelcase */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-cycle */
import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import Configurator from "../../components/Configurator";
// import Block_ford_cards from "../../components/Block_ford_cards";
import Picking_switch from "../../components/picking_switch/Picking_switch";
// import hull_types from "../../components/hull_static/hull_types_specs.json";

export default function configurator_p1() {
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      <Configurator />
      {/* <Block_ford_cards /> */}
      <Picking_switch />
    </>
  );
}
