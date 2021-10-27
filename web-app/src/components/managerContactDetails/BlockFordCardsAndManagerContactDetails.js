/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Block_ford_cards from "../Block_ford_cards";
import ManagerContactDetails from "./ManagerContactDetails";

/* cюда добавляйте imports  своих компонентов */

const css = `
  .flex {
    display: flex;
    width: 1128px;
    justify-content: space-between;
    align-items: center;
  }`;

export default function PooledСomponent() {
  const picturers = {
    pic1: "/img/main_pic5.jpg",
    pic2: "/img/main_pic501.jpg",
    pic3: "/img/main_pic502.jpg",
    pic4: "/img/main_pic503.jpg",
  };
  return (
    <div className="App">
      <div className="flex">
        <style type="text/css">{css}</style>
        <Block_ford_cards hull_types={picturers} />
        <ManagerContactDetails />
      </div>
    </div>
  );
}
