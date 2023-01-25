
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

// import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import HelloWorld from './components/helloworld';
import StarRating from './components/StarRating';
import { Widget } from './components/StarWidget'

/**
 *  Storing ENDPOINTS in config enables us to share these endpoints
 *  across front and back end to ensure if we do  ever change
 *  (i.e. the event page routes) that we're updating the
 *  social bot interceptor as well without having to remember to do so!
 */

export const WIDGET_SIZE = 5

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
        <HelloWorld />
      </div>
    );
}

{/* export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); */}
export default App;

//! Class App Component !//
// const mapStateToProps = (store) => ({
// });
// const mapDispatchToProps = (dispatch) => ({
// });
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   // Initialize all current curriculum and YAML content on mount.
//   componentDidMount() {
//   }
//   componentDidUpdate(prevProps) {
//   }
//   render() {
//     return (
//       <div>
//         <StarRating />
//         <Widget />
//         {/* < HelloWorld / > */}
//       </div>
//     );
//   }
// }
// {/* export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); */}
// export default App;