
/**
 * **************************************************
 *
 * @module App
 *
 * @description
 * App.jsx is the main React component for the App.
 * This is the starting point for the CodersCorner SPA.
 *
 * **************************************************
 */

import { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const { legacyRedirectConfig, socialBotRoutes: { EVENTS_ENDPOINT = {} } = {} } = config;

const mapStateToProps = (store) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
