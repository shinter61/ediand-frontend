import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import Top from "./Top";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Counter from "./Counter";
import Auth from "./Auth";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/sign_in" component={SignIn} />
          <Auth>
            <Switch>
              <Route exact path="/counter" component={Counter} />
            </Switch>
          </Auth>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
