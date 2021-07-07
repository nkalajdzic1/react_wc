import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

interface ICustomRouteProps {
  title: string;
  exact?: boolean;
  path?: string | string[];
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

function CustomRoute({ title, exact, path, component }: ICustomRouteProps) {
  document.title = `News Portal | ${title}`;
  return <Route>{component}</Route>;
}

export default CustomRoute;
