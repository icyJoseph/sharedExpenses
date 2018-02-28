import React from "react";

import { Route, Router, Redirect } from "react-router-dom";
import App from "./Components/App";
import Add from "./Components/Add/Add";
import Home from "./Components/Home/Home";
import Callback from "./Components/Callback/Callback";
import Auth from "./Auth";
import history from "./history";
import Detail from "./Components/Table/Detail";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.slowAuthentication();
  }
};

const compose = (auth, props, Component) =>
  !auth.isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <Component auth={auth} {...props} />
  );

export const Routes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route
          exact
          path="/home/add"
          render={props => compose(auth, props, Add)}
        />
        <Route
          exact
          path="/home/:id"
          render={props => compose(auth, props, Detail)}
        />
        <Route
          exact
          path="/home"
          render={props => compose(auth, props, Home)}
        />
        <Route
          exact
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          exact
          path="/"
          render={props => <App auth={auth} {...props} />}
        />
      </div>
    </Router>
  );
};

export default Routes;
