<<<<<<< HEAD:web-app/src/pages/configurator_p3/Configurator_p3.js
/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
=======
>>>>>>> origin/dev:web-app/src/pages/configurator_p3/ConfiguratorP3.js
import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
// import TabRequestExecution3 from "../../components/Tab-request-execution/TabRequestExecution3";
// import TabRequestExecution4 from "../../components/Tab-request-execution/TabRequestExecution4";
/* cюда добавляйте imports  своих компонентов */

<<<<<<< HEAD:web-app/src/pages/configurator_p3/Configurator_p3.js
export default function Configurator_p3() {
  return (
    <>
      <AppHeader />
      <BreadCrumbs />
      {/* <TabRequestExecution3 />
      <TabRequestExecution4 /> */}
    </>
=======
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
>>>>>>> origin/dev:web-app/src/pages/configurator_p3/ConfiguratorP3.js
  );
}
