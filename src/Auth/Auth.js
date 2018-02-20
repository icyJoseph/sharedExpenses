import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "icjoseph.eu.auth0.com",
    clientID: process.env.REACT_APP_CLIENT_ID,
    redirectUri: "http://localhost:3000/callback",
    audience: "https://icjoseph.eu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
