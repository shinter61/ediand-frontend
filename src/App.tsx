import * as React from "react";
import Top from "./Top";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Top} />
      <Route exact path="/sign_up" component={SignUp} />
      <Route exact path="/sign_in" component={SignIn} />
    </BrowserRouter>
  );
};

export default App;
