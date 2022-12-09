
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
// import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
// import * as authActions from './store/actions/creators/authActions';
// import * as yamlActions from './store/actions/creators/yamlActions';
// import * as curriculumActions from './store/actions/creators/curriculumActions';

// nav
// import Navbar from './components/navigation/Navbar';
// import Footer from './components/navigation/Footer';

// pages
// import AdminEventDetails from './pages/AdminEventDetails';
// import AdsCSPrep from './pages/AdsCSPrep';
// import AdsHome from './pages/AdsHome';
// import AllApplicationsClosed from './pages/AllApplicationsClosed';
// import Apply from './pages/Apply';
// import ApplyV2 from './pages/ApplyV2';
// import ApplyV2Details from './pages/ApplyV2Details';
// import CreatePasswordPage from './pages/CreatePasswordPage';
// import EventDetails from './pages/EventDetails';
// import EventSignin from './pages/EventSignin';
// import EventSigninClosed from './pages/EventSigninClosed';
// import EventsPage from './pages/EventsPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';
// import LoginPage from './pages/LoginPage';
// import NotFound from './pages/NotFound';
// import RedirectVerifyEmail from './pages/RedirectVerifyEmail';
// import ResetPasswordPage from './pages/ResetPasswordPage';
// import SignupPage from './pages/SignupPage';
// import SuccessfulApplicationPage from './pages/SuccessfulApplicationPage';
// import UserProfile from './pages/UserProfile';
// import VerifyEmail from './pages/VerifyEmail';

// components
// import ScrollToTop from './components/library/ScrollToTop';

// utils
// import { initializeGTM } from './utils/reactGTM';

// styles and assets
// import styles from './App.scss';

// Initialize Google Tag Manager.
// initializeGTM();

/**
 *  Storing ENDPOINTS in config enables us to share these endpoints
 *  across front and back end to ensure if we do  ever change
 *  (i.e. the event page routes) that we're updating the
 *  social bot interceptor as well without having to remember to do so!
 */
const { legacyRedirectConfig, socialBotRoutes: { EVENTS_ENDPOINT = {} } = {} } = config;

const mapStateToProps = (store) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   loginRedirectPath: '',
    };
  }

  // Initialize all current curriculum and YAML content on mount.
  componentDidMount() {
    // this.props.getAllCurriculumData();

  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <div className={styles.app}>
        {/* <Flash />
        <Navbar /> */}
        <div className={styles.spacer}></div>
        <Route component={ScrollToTop} />
        <Switch>
          {/* === HOME PAGE === */}
          <Route exact path="/">
            <Redirect to="/apply" />
          </Route>

          {/* === ADS LANDING PAGES === */}
          {/* <Route exact path="/ny-software-engineering-immersive" component={AdsHome} /> */}

          {/* === AUTH PAGES === */}
          {/* <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/verify-email" component={RedirectVerifyEmail} />
          <Route exact path="/verify-email-update" component={RedirectVerifyEmail} />
          <Route exact path="/verify" component={VerifyEmail} />
          <Route exact path="/forgot-password" component={ForgotPasswordPage} />
          <Route exact path="/reset-password/:token" component={ResetPasswordPage} />
          <Route exact path="/create-password" component={CreatePasswordPage} /> */}

          {/* === PROGRAM APPLICATION ROUTES === */}
          {/* <Route exact path="/apply/:fastTrackCode?" component={Apply} /> */}

          {/* === EVENT-RELATED ROUTES === */}
          {/* <Route exact path={EVENTS_ENDPOINT.endpoint} component={EventsPage} /> */}

          {/* === PRIVATE ROUTES (LOGIN REQUIRED) === */}
          {/* <PrivateRoute exact path="/user-profile" component={UserProfile} /> */}

          {/* === 404 PAGES === */}
          <Route exact path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>

      </div>
    );
  }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
