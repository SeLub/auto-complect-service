const defaultState = {
  alignment: "10+1",
};

export default function toggleBtnBus(stateToggBus = defaultState, action) {
  switch (action.type) {
    case "10+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
        sourcePic: action.source,
      };
    case "14+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
        sourcePic: action.source,
      };
    case "17+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
        sourcePic: action.source,
      };
    case "19+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
        sourcePic: action.source,
      };
    case "20+1":
      return {
        ...stateToggBus,
        alignment: action.payload,
        sourcePic: action.source,
      };

    default:
      return stateToggBus;
  }
}
