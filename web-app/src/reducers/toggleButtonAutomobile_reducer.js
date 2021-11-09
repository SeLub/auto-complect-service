const defaultState = {
  alignment: " ",
};

export default function toggleBtnAutomobile(
  stateToggleAuto = defaultState,
  action
) {
  switch (action.type) {
    case "8+1":
      return {
        ...stateToggleAuto,
        alignment: action.payload,
      };

    default:
      return stateToggleAuto;
  }
}
