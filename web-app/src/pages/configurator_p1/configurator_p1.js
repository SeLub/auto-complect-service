/* eslint-disable camelcase */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-cycle */
import { useHistory } from "react-router"
import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import Configurator from "../../components/Configurator";
import Basic_Options from "../../components/Basic_Options";
import Block_ford_cards from "../../components/Block_ford_cards"
import Picking_switch from "../../components/picking_switch/Picking_switch";
// import hull_types from "../../components/hull_static/hull_types_specs.json";

export default function configurator_p1() {
  const history = useHistory();
  const hull_types = history.location.state.hull_types;
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      <Configurator />
      <Block_ford_cards hull_types={hull_types}/>
      <Picking_switch />
      <Basic_Options hull_types={hull_types.base_options}/>
    </>
  );
}

