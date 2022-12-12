
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
// import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // webpack v5 does not allow named imports for JSON modules
import HelloWorld from './components/helloworld'


/**
 *  Storing ENDPOINTS in config enables us to share these endpoints
 *  across front and back end to ensure if we do  ever change
 *  (i.e. the event page routes) that we're updating the
 *  social bot interceptor as well without having to remember to do so!
 */

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

  // Initialize all current curriculum and YAML content on mount.
  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <div>
        < HelloWorld / >
      </div>
    );
  }
}

{/* export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); */}
export default App;