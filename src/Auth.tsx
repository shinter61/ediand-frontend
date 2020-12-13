import * as React from "react";
import { useDispatch } from "react-redux";
import { RouteProps } from "react-router";
import { Redirect } from "react-router-dom";
import { fetchCurrentUser } from "./sessionSlice";
import { AppDispatch } from "./App";

type AuthProps = {
  children: RouteProps["children"];
};

const Auth: React.FC<AuthProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    const fetch = async () => {
      const res = await dispatch(fetchCurrentUser());
      if (fetchCurrentUser.rejected.match(res)) {
        setIsAuthenticated(false);
      }
    };

    fetch();
  }, []);

  return (
    <React.Fragment>
      {isAuthenticated ? children : <Redirect to={"/sign_in"} />};
    </React.Fragment>
  );
};

export default Auth;
