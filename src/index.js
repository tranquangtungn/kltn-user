import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";

ReactDOM.render(
  <Router>
    {/* <Switch>
      <Route exact path="/login" component={SignInPage}></Route>

    </Switch> */}

    <App />
  </Router>,
  document.getElementById("root")
);
