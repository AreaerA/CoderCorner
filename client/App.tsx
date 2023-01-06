
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
import StarRating from './components/StarRating';


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
        <StarRating />
        {/* < HelloWorld / > */}
      </div>
    );
  }
}

{/* export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); */}
export default App;




//! Functional component architecture for App Component

// import {useState, useEffect} from 'react'; 
// import Leaderboard from './Components/Leaderboard';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Tournament from './Components/Tournament';
// //import Player from './Components/Player';
// import './styling/styles.css';


// const App = () => {
//     const [leaderBoard, setLeaderboard] = useState([]);
//     const [tournament, setTournament] = useState({});
//     const [favorites, SetFavorites] = useState([]); 
//     // console.log(leaderboard)
//     useEffect(() => {
//         fetch('/api/test')
//             .then(res => res.json())
//             .then(data => setLeaderboard(data))
//     }, []);

//     useEffect(() => {
//         fetch('/api/tournament')
//             .then(res => res.json())
//             .then(data => setTournament(data))
//     }, {});

    

//     return (
//         <div className='App'>
//                 <Header />
//                 <Leaderboard leaderBoard = {leaderBoard} />
//                 <Tournament tournament = {tournament} />
//                 <Footer />
//         </div>
//         )
//     };

//     export default App; 
