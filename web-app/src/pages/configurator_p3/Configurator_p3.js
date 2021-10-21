/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import RequestExecutionTabs from "../../components/request-execution-tabs/RequestExecutionTabs";
import PooledСomponent from "../../components/managerContactDetails/BlockFordCardsAndManagerContactDetails";

/* cюда добавляйте imports  своих компонентов */

const css = `
  .flex {
    display: flex;
    width: 1128px;
    
  }`;

export default function Configurator_p3() {
  return (
    <>
      <style type="text/css">{css}</style>

      <AppHeader />
      <BreadCrumbs />

      <PooledСomponent />

      <RequestExecutionTabs />
    </>
  );
}
