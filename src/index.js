import "assets/scss/material-kit-react.scss?v=1.9.0";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
// pages for this product

import LibraryPage from "views/LibraryPage/LibraryPage";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import MainPage from "views/MainPage/MainPage.js"
import signInPage from "views/SignInPage/SignInPage.js";
import SignUpPage from "views/SignUpPage/SignUpPage.js";

// only load when call


var hist = createBrowserHistory();

ReactDOM.render(

  <Router history={hist}>

    <Switch>

      <Route path="/login" component={signInPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/library" component={LibraryPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Router>
  ,
  document.getElementById("root")
);
