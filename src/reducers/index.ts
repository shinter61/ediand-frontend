import { combineReducers } from "redux";
import counterReducer from "../counterSlice";
import sessionReducer from "../sessionSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  session: sessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
