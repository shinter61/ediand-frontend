import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import Top from "./Top";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Counter from "./Counter";

const store = configureStore({
  reducer: rootReducer,
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Top} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/counter" component={Counter} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
