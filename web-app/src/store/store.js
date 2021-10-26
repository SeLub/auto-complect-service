import { applyMiddleware, compose, combineReducers, createStore } from "redux";
// import throttle from "lodash/throttle";
import reducers from "../reducers/reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const middlewares = [];

function getInitialState() {
  return {};
}

/* eslint-disable */
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
  /* eslint-enable */
  return createStore(
    combineReducers(reducers),
    getInitialState(),
    composeFunction(applyMiddleware(...middlewares)),
    persistedState
  );
};

const store = createReduxStore();
const { dispatch, getState } = store;

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
export { dispatch, getState };
