const defaultState = {
  alignment: "10+1",
};

export default function toggleBtnBus(stateToggBus = defaultState, action) {
  switch (action.type) {
    case "10+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
      };
    case "14+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
      };
    case "17+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
      };
    case "19+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
      };
    case "20+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
      };

    default:
      return stateToggBus;
  }
}
