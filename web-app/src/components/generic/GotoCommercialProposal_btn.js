import React from "react";
import { useHistory } from "react-router-dom";
import ConfiguratorP3 from "../../pages/configurator_p3/Configurator_p3";

const GotoCommercialProposalBtn = () => {
  const history = useHistory();

  function handleClick() {
    history.push(ConfiguratorP3);
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
