import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
// React entry-point component
import App from './App';



const root = createRoot(document.getElementById('root'));

const render = (Component) => {
  root.render(
    // <Provider store={store}>
    <BrowserRouter>
        <Component />
      </BrowserRouter>
    // </Provider>
  );
};

render(App);