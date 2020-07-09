import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk';
import reducer from "../reducers";
import randomId from "../middlewares/randomID";

const enhancer = compose(
  applyMiddleware(randomId, ReduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, {}, enhancer);

export default store;
