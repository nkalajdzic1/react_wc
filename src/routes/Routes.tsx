import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage/TermsAndConditionsPage";
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
        <CustomRoute
          exact
          path="/about_us"
          component={AboutPage}
          title="About us"
        />
        <CustomRoute
          exact
          path="/terms_and_conditions"
          component={TermsAndConditionsPage}
          title="Terms and conditions"
        />
      </Switch>
    </Router>
  );
}

export default Routes;
