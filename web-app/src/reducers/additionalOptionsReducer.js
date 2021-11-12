export default function additionalOptionsReducer(
  additionalOptions = [],
  action
) {
  switch (action.type) {
    case "additionalOptions/set":
      return {
        additionalOptions: action.additionalOptions,
      };
    default:
      return additionalOptions;
  }
}
