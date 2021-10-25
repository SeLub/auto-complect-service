/* eslint-disable import/prefer-default-export */
// import hullTypes from "../../reducers/hull_types_reducer";

const mapStateToProps = (state) => {
  return {
    base_options: state.hullTypes.base_options,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

export { mapStateToProps };
