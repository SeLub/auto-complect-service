/* eslint-disable */


const counter = (state = { value: 0 }, action) => {
  if (action.type === 'test') {
    return { value: state.value + 1 };
  }
  return state;
};

export default counter ;