/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import ReEquipment from "../../components/ReEquipment";
import RefitTabs from "../../components/refit-tabs/RefitTabs";
import ReEquipmentText from "../../components/re-equipment-text/ReEquipmentText";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";

export default function configurator_p2() {
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      <ReEquipment />
      <ReEquipmentText />
      <RefitTabs />
    </>
  );
}
