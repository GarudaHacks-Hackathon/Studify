<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import "./App.css";

import StudentSchedule from "./pages/StudentSchedule";
import CreateClass from "./pages/CreateClass";
import ClassGenerated from "./pages/ClassGenerated";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StudentSchedule />
        </Route>
        <Route path="/create-class">
          <CreateClass />
        </Route>
        <Route path="/class-generated">
          <ClassGenerated />
        </Route>
      </Switch>
    </Router>
=======
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
>>>>>>> bryan_branch
  );
}

export default App;
