import React from "react";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return <Routes />;
}

const AppWrapper = () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);

export default AppWrapper;
