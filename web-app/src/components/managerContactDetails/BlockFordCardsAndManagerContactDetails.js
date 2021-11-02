import React from "react";
import BlockFordCards from "../BlockFordCards";
import ManagerContactDetails from "./ManagerContactDetails";

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
        <BlockFordCards hull_types={picturers} />
        <ManagerContactDetails />
      </div>
    </div>
  );
}
