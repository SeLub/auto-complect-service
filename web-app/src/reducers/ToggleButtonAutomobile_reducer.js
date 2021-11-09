const defaultState = {
  alignment: 0,
};

export default function toggleBtnAutomobile(
  stateToggleAuto = defaultState,
  action
) {
  switch (action.type) {
    case "8+1":
      return {
        ...stateToggleAuto,
        alignment: stateToggleAuto.alignment + action.payload,
      };

    default:
      return stateToggleAuto;
  }
}
