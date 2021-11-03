/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
// import TabRequestExecution3 from "../../components/Tab-request-execution/TabRequestExecution3";
// import TabRequestExecution4 from "../../components/Tab-request-execution/TabRequestExecution4";
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
