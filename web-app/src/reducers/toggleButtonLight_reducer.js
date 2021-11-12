const defaultState = {
  selectedSitsNum: "5/6+1",
  schemaPicture: "placeholder",
};

export default function toggleBtnLight(stateToggLight = defaultState, action) {
  switch (action.type) {
    case "lightReequip/set":
      return {
        selectedSitsNum: action.selectedSitsNum,
        schemaPicture: action.schemaPicture,
        reequipBasicOptions: action.reequipBasicOptions,
        reequipOptions: action.reequipOptions,
      };
    default:
      return stateToggLight;
  }
}
