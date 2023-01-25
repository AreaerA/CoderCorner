
/**
 * **************************************************
 *
 * @module App
 *
 * @description
 * App.tsx is the main React component for the App.
 * This is the starting point for the CodersCorner SPA.
 *
 * **************************************************
 */
import { Component } from 'react';
// import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // webpack v5 does not allow named imports for JSON modules
import HelloWorld from './components/helloworld'
import GoogleMap from './components/Map';


/**
 *  Storing ENDPOINTS in config enables us to share these endpoints
 *  across front and back end to ensure if we do  ever change
 *  (i.e. the event page routes) that we're updating the
 *  social bot interceptor as well without having to remember to do so!
 */

const App = () => {
  //? State Implementation?//
//     const [tournament, setTournament] = useState({});

//     useEffect(() => {
//         fetch('/api/test')
//             .then(res => res.json())
//             .then(data => setLeaderboard(data))
//     }, []);
  
    return (
      <div>
        <GoogleMap />
        {/* < HelloWorld / > */}
      </div>
    );
}


{/* export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); */}
export default App;