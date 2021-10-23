/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import TabRequestExecution3 from "../../components/Tab-request-execution/TabRequestExecution3";
import TabRequestExecution4 from "../../components/Tab-request-execution/TabRequestExecution4";
/* cюда добавляйте imports  своих компонентов */

export default function Configurator_p3() {
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      <TabRequestExecution3 />
      <TabRequestExecution4 />
    </>
  );
}
