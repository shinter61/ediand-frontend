import { combineReducers } from "redux";
import counterReducer from "../counterSlice";

export default combineReducers({
  counter: counterReducer,
});
