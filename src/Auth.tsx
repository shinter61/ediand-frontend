import * as React from "react";
import { Redirect } from "react-router-dom";

const Auth = (props: any) => (
  // props.currentUser.isLoggedIn ? props.children : <Redirect to={"/sign_in"} />;
  <Redirect to={"/sign_in"} />
);

export default Auth;
