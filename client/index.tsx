/**
 * ************************************
 *
 * @module  index.jsx - (uses jsx for Vite)
 * @description entry point for react app
 *
 * ************************************
 */

import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';
// State Management
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./App";


// React entry-point component
import App from './App';

// React Router Information
import ErrorPage from './components/ErrorPage';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact';
import EditContact, {
  action as editAction,
} from './routes/edit';
import {
  action as destroyAction
} from './routes/destroy';
import Index from './routes/index';

// Redux state management
import store from './store/index'

// Import global css with reset
import './stylesheets/global.css'

// Initialize the React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            //Tutorial is being lazy by using same loader, should use different
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
          }
        ]
      }
    ]
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

//? Optional JSX Alternative to Routerfiles
// import {
//   createRoutesFromElements,
//   createBrowserRouter,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route
//           path="contacts/:contactId/destroy"
//           action={destroyAction}
//         />
//       </Route>
//     </Route>
//   )
// );