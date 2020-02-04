import { combineReducers } from "redux";
import article from "./articles";
import counter from "./counter";
import filters from "./filters";
export default combineReducers({
  article,
  counter,
  filters
});
