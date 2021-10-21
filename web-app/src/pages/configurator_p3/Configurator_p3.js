/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import TabRequestExecution1 from "../../components/TabRequestExecution/TabRequestExecution1";
/* cюда добавляйте imports  своих компонентов */

export default function Configurator_p3() {
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      <TabRequestExecution1 />
    </>
  );
}
