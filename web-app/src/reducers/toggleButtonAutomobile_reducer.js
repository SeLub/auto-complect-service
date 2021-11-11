const defaultState = {
  alignment: "8+1",
  source: "",
};

export default function toggleBtnAutomobile(
  stateToggleAuto = defaultState,
  action
) {
  switch (action.type) {
    case "8+1":
      return {
        ...stateToggleAuto,
        alignment: action.aligment,
        sourcePic: action.source,
      };

    default:
      return stateToggleAuto;
  }
}
