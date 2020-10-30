import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import DesignerContainer from "./designer/DesignerContainer";

export default (
  <Router>
    <div id="app">
      <Switch>
        <Route path="*" component={DesignerContainer} />
      </Switch>
    </div>
  </Router>
);
