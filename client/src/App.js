import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Main from "./pages/main";
import Login from "./pages/login";
import Signup from "./pages/signup";

import "./App.css";

function App() {
  const [state, setState] = useState({
    loggedIn: false,
    username: null,
  });

  useEffect(() => {
    getUser();
  });

  const updateUser = (userObject) => {
    setState(userObject);
  };

  const getUser = () => {
    axios.get("/user/").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <Nav updateUser={updateUser} loggedIn={state.loggedIn} />
        {/* greet user if logged in: */}
        {state.loggedIn && <p>Join the party, {state.username}!</p>}
        {/* Routes to different components */}
        <Route exact path="/" component={Main} />
        <Route path="/login" render={() => <Login updateUser={updateUser} />} />
        <Route path="/signup" render={() => <Signup />} />
      </div>
    </Router>
  );
}
export default App;
