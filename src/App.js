import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StudentSchedule from "./pages/StudentSchedule";
import CreateClass from "./pages/CreateClass";
import ClassGenerated from "./pages/ClassGenerated";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/student-schedule">
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
  );
}

export default App;
