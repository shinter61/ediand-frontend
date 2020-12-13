import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const render = (_App: React.FC) => {
  ReactDOM.render(<_App />, document.getElementById("root"));
};

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}

render(App);
