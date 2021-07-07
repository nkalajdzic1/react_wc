import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import CustomRoute from "./CustomRoute";

function Routes() {
  return (
    <Router basename="/site">
      <Switch>
        <CustomRoute exact path="/" component={LandingPage} title="Home" />
        <CustomRoute
          exact
          path="/landing"
          component={LandingPage}
          title="Home"
        />
        <CustomRoute
          exact
          path="/article"
          component={ArticlePage}
          title="Home"
        />
      </Switch>
    </Router>
  );
}

export default Routes;
