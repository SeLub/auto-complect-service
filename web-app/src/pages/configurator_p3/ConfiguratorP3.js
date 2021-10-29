import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import RequestExecutionTabs from "../../components/request-execution-tabs/RequestExecutionTabs";
import PooledСomponent from "../../components/managerContactDetails/BlockFordCardsAndManagerContactDetails";

/* cюда добавляйте imports  своих компонентов */

const css = `
  .flex {
    display: flex;
    width: 1128px;
    
  }`;

export default function ConfiguratorP3() {
  return (
    <div>
      <style type="text/css">{css}</style>

      <AppHeader />
      <BreadCrumbs />

      <PooledСomponent />

      <RequestExecutionTabs />
    </div>
  );
}
