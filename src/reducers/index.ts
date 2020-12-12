import { combineReducers } from "redux";
import counterReducer from "../counterSlice";
import sessionReducer from "../sessionSlice";

export default combineReducers({
  counter: counterReducer,
  session: sessionReducer,
});
