const defaultState = {
  selectedSitsNum: "5/6+1",
  schemaPicture: "/img/typeOftransport/CargoPassenger_scheme_5+1.jpg",
  reequipBasicOptions: [],
  reequipOptions: [],
};

export default function toggleBtnBus(stateToggBus = defaultState, action) {
  switch (action.type) {
    case "busReequip/set":
      return {
        selectedSitsNum: action.selectedSitsNum,
        schemaPicture: action.schemaPicture,
        reequipBasicOptions: action.reequipBasicOptions,
        reequipOptions: action.reequipOptions,
      };
    default:
      return stateToggBus;
  }
}
