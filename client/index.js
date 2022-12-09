/**
 * ************************************
 *
 * @module  index.js
 * @description entry point for react app
 *
 * ************************************
 */

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// React entry-point component
import App from "./App";

// Redux store
import store from "./store";

// components
import LocationListener from "./components/library/LocationListener";

// global styles
import "./stylesheets/global/style.scss";

const root = createRoot(document.getElementById("app"));

const render = (Component) => {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <LocationListener>
          <Component />
        </LocationListener>
      </BrowserRouter>
    </Provider>
  );
};

render(App);
