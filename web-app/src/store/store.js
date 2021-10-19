/* eslint-disable */
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import reducers from '../reducers/reducers';


const middlewares = [];

function getInitialState() {
  return {};
}

// export default configureStore({
//   reducer: {
//     hull_types: hull_types_reducer
//   }
// })

const createReduxStore = () => {
  let composeFunction;
  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
  ) {
    composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  } else {
    composeFunction = compose;
  }

  return createStore(
    combineReducers(reducers),
    getInitialState(),
    composeFunction(applyMiddleware(...middlewares))
  );
};

const store = createReduxStore();
const { dispatch, getState } = store;

export default store;
export { dispatch, getState };