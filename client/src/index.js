import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-a40dd75j.us.auth0.com"
  //   clientId="l0Rd5pa9Rp31R2ImctriIY7667kJPtxw"
  //   redirectUri="http://localhost:3000"
  // >
    <App />,
  document.getElementById("root")
);