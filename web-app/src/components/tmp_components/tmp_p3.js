/* eslint-disable react/jsx-fragments */
import React from "react";
import { useHistory } from "react-router";

export default function TmpP3() {
  const history = useHistory();
  function handleClick() {
    history.push({
      pathname: "/configurator_p2",
    });
  }
  return (
    <>
      <button onClick={handleClick} type="button">
        Кнопка временная
      </button>
    </>
  );
}
