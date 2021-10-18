/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import Block_ford_cards from "../../components/Block_ford_cards";
import RequestExecutionTabs from "../../components/request-execution-tabs/RequestExecutionTabs";

/* cюда добавляйте imports  своих компонентов */

const css = `
.App_Block_ford_cards {
  text-align: center;
  width: 1128px;
  margin: 0 auto;
  padding: 0 76px;
}`;

export default function Configurator_p3() {
  const pictires = {
    pic1: "/img/main_pic5.jpg",
    pic2: "/img/main_pic501.jpg",
    pic3: "/img/main_pic502.jpg",
    pic4: "/img/main_pic503.jpg",
  };
  return (
    <>
      <style type="text/css">{css}</style>
      <AppHeader />
      <BreadCrumbs />
      <div className="App_Block_ford_cards">
        <Block_ford_cards hull_types={pictires} />
      </div>
      <RequestExecutionTabs />
    </>
  );
}
