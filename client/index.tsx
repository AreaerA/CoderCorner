/**
 * ************************************
 *
 * @module  index.jsx - (uses jsx for Vite)
 * @description entry point for react app
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
// State Management
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// React entry-point component
import App from './App';
// Redux state management
import store from './store/index'

// Import global css with reset
import './stylesheets/global.css'

// Initialize the React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

// New function for starting react app (2022) allows for current methods
const root = createRoot(document.getElementById('root'));

// Redux not established for app yet
// Reater Router 6.4 set up
const render = (Component) => {
  root.render(
    // <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    // </Provider>
  );
};

render(App);