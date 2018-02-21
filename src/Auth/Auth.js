/*eslint no-console: "off" */
import auth0 from "auth0-js";
import history from "../history";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "icjoseph.eu.auth0.com",
    /*eslint-disable-next-line*/
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: "http://localhost:3000/callback",
    audience: "https://icjoseph.eu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"
  });

  userProfile;

  slowAuthentication = () => {
    setTimeout(this.handleAuthentication, 3000);
  };

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

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No Access Token found");
    }
    return accessToken;
  };

  getProfile = fn => {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      fn(err, profile);
    });
  };
}
