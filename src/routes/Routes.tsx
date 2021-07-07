import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import CustomRoute from "./CustomRoute";

function Routes() {
  return (
    <Router basename="">
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
          title="Article"
        />
        <CustomRoute
          exact
          path="/search"
          component={SearchPage}
          title="Article"
        />
      </Switch>
    </Router>
  );
}

export default Routes;
