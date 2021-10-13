/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header";
import ReEquipment from "../../components/ReEquipment";
import RefitTabs from "../../components/refit-tabs/RefitTabs";
import ReEquipmentText from "../../components/re-equipment-text/ReEquipmentText";

export default function configurator_p2() {
  return (
    <>
      <AppHeader />
      <ReEquipment />
      <ReEquipmentText />
      <RefitTabs />
    </>
  );
}
