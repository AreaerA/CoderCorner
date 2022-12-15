/**
 * ************************************
 *
 * @module  index.jsx - (uses jsx for Vite)
 * @description entry point for react app
 *
 * ************************************
 */
// Import the needed method, not all of React
import { createRoot } from 'react-dom/client';
// State Management
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// React entry-point component
import App from './App';
// Redux state management
import store from './store/index'

// New function for starting react app (2022) allows for current methods
const root = createRoot(document.getElementById('root'));

const render = (Component) => {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  );
};

render(App);