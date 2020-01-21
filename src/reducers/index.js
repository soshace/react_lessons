import { combineReducers } from "redux";
import article from "./articles";
import counter from "./counter";
export default combineReducers({
  article,
  counter
});
