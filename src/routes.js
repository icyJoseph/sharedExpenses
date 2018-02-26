import React from "react";

import { Route, Router, Redirect } from "react-router-dom";
import App from "./App";
import Home from "./Home/Home";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";
import Detail from "./Table/Detail";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.slowAuthentication();
  }
};

export const Routes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route
          exact
          path="/home/:id"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
              <Detail auth={auth} {...props} />
            )
          }
        />
        <Route
          exact
          path="/home"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
              <Home auth={auth} {...props} />
            )
          }
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
