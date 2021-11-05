/* eslint-disable import/no-named-as-default-member */
/* eslint-disable camelcase */
import React from "react";
import BlockFordCards from "../BlockFordCards";
import ManagerContactDetails from "./ManagerContactDetails";
import store from "../../store/store";

const css = `
  .flex {
    display: flex;
    width: 1128px;
    justify-content: space-between;
    align-items: center;
  }`;

export default function PooledСomponent() {
  const box = {
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    width: 616,
    height: 260,
    marginRight: 5,
    padding: 0,
  };
  const hull_types = store.getState();
  return (
    <div className="App">
      <div className="flex">
        <style type="text/css">{css}</style>
        <BlockFordCards sx={box} hull_types={hull_types.hullTypes} />
        <ManagerContactDetails />
      </div>
    </div>
  );
}
