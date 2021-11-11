const defaultState = {
  alignment: "5+1",
};

export default function toggleBtnCargo(stateToggCargo = defaultState, action) {
  switch (action.type) {
    case "5+1":
      return {
        ...stateToggCargo,
        alignment: action.payload,
        sourcePic: action.source,
      };
    case "6+1":
      return {
        ...stateToggCargo,
        alignment: action.payload,
        sourcePic: action.source,
      };
    case "8+1":
      return {
        ...stateToggCargo,
        alignment: action.payload,
        sourcePic: action.source,
      };

    default:
      return stateToggCargo;
  }
}
