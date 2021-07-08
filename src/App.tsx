import React from "react";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <Routes />;
}

const AppWrapper = () => (
  <Provider store={store}>
    <App></App>
    <ToastContainer />
  </Provider>
);

export default AppWrapper;
