import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StudentSchedule from "./pages/StudentSchedule";
import TeacherSchedule from "./pages/TeacherSchedule";
import CreateClass from "./pages/CreateClass";
import ManageClass from "./pages/ManageClass";
import ClassGenerated from "./pages/ClassGenerated";
import CreateSponsor from "./pages/CreateSponsor";
import SponsorList from "./pages/SponsorList";
import SponsorDetails from "./pages/SponsorDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import firebase from "./firebase.js";

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
        <Route path="/teacher-schedule">
          <TeacherSchedule />
        </Route>
        <Route path="/create-class">
          <CreateClass />
        </Route>
        <Route path="/manage-class">
          <ManageClass />
        </Route>
        <Route path="/class-generated">
          <ClassGenerated />
        </Route>
        <Route path="/sponsor-list">
          <SponsorList />
        </Route>
        <Route path="/create-sponsor">
          <CreateSponsor />
        </Route>
        <Route path="/sponsor-details">
          <SponsorDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
