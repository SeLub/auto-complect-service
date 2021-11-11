import React from "react";
import { useHistory } from "react-router-dom";

// this component for going to next page

export default function NextButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/сonfigurator_p3");
  }
  return (
    <div className="nextBtn">
      <button type="button" onClick={() => handleClick()}>
        Дальше
      </button>
    </div>
  );
}
