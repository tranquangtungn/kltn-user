import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "./_helpers"

ReactDOM.render(
  <Router history={history}>
    {/* <Switch>
      <Route exact path="/login" component={SignInPage}></Route>

    </Switch> */}

    <App />
  </Router>,
  document.getElementById("root")
);
