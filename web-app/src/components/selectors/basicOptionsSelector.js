// const mapStateToProps = (state) => {
//   return {
//     hullTypes: getVisibleTodos(state.todos, state.visibilityFilter),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: "TOGGLE_TODO",
        id,
      });
    },
  };
};

export default mapDispatchToProps;
