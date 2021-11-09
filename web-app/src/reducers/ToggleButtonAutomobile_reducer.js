export default function toggleBtnAutomobile(currentTogglBtn = {}, action) {
  switch (action.type) {
    case "8+1":
      return {
        currentSource: action.source,
      };

    default:
      return currentTogglBtn;
  }
}
