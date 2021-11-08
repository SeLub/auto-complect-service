export default function colorSetter(currentColor = {}, action) {
  switch (action.type) {
    case "color/set":
      return {
        currentColor: action.color,
      };
    default:
      return currentColor;
  }
}
