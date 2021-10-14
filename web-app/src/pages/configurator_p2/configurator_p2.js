/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header";
import ReEquipment from "../../components/ReEquipment";
// import RefitTabs from "../../components/refit-tabs/RefitTabs";
import ReEquipmentText from "../../components/re-equipment-text/ReEquipmentText";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import RequestExecutionTabs from "../../components/request-execution-tabs/RequestExecutionTabs";

export default function Configurator_p2() {
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      <ReEquipment />
      <ReEquipmentText />
      <RequestExecutionTabs />
    </>
  );
}
