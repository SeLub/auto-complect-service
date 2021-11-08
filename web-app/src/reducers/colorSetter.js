export default function colorSetter(currentCar = {}, action) {
  switch (action.type) {
    case "color/set":
      return {
        currentColor: action.color,
        currentCarPic: action.source,
      };
    default:
      return currentCar;
  }
}
