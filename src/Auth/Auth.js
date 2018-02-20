/*eslint no-console: "off" */
import auth0 from "auth0-js";
import history from "../history";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "icjoseph.eu.auth0.com",
    /*eslint-disable-next-line*/
    clientID: process.env.REACT_APP_CLIENT_ID,
    redirectUri: "http://localhost:3000/callback",
    audience: "https://icjoseph.eu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/home");
      } else if (err) {
        history.replace("/home");
        console.log(err);
      }
    });
  };

  setSession = authResult => {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    history.replace("home");
  };

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    history.replace("/home");
  };

  isAuthenticate = () => {
    let expiresAt = JSON.parse(localStorage.getItem);
    return new Date().getTime() < expiresAt;
  };
}
