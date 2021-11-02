/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from "react";
import { useHistory } from "react-router-dom";

const GotoCommercialProposalBtn = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/Configurator_p3");
  }
  return (
    <div className="gotoCom">
      <button type="button" onClick={handleClick}>
        Перейти к оформлению КП
      </button>
    </div>
  );
};

export default GotoCommercialProposalBtn;
