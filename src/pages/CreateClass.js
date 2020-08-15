import React from "react";
import "date-fns";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import emoji from "node-emoji";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClassGenerated from "./ClassGenerated";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import firebase from "../firebase";
import { timePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";

const config = {
  apiKey: "AIzaSyDuqngWgMDtzPJXkILsKm9ix7XQhE5uogU",
  authDomain: "studify-32a2a.firebaseapp.com",
  databaseURL: "https://studify-32a2a.firebaseio.com",
  projectId: "studify-32a2a",
  storageBucket: "studify-32a2a.appspot.com",
  messagingSenderId: "910542684017",
  appId: "1:910542684017:web:ed4a30257b9f71c21c40d0",
  measurementId: "G-BKWY6HZ23B",
};

const history = createBrowserHistory();

// Get the current location.
const location = history.location;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

class CreateClass extends React.Component {
  constructor(props) {
    super(props);
    this.userID = this.props.userID;
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.state = {
      className: "",
      zoomMeetingID: 0,
      zoomMeetingPassword: "",
      zoomMeetingLink: "",
      isTeacher: false,
      teacherID: "",
      typeOfClass: "",
      day: "",
      from: "",
      to: "",
      teacherEmail: "",
      loading: false,
    };
    this.meetingType = ["Lecture", "Tutorial", "Meeting"];
    this.days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
  }

  createAClass(event) {
    event.preventDefault();
    this.state.loading = true;

    db.collection("users")
      .doc(this.props.userID)
      .collection("classes")
      .add({
        className: this.state.className,
        zoomMeetingID: this.state.zoomMeetingID,
        zoomMeetingPassword: this.state.zoomMeetingPassword,
        zoomMeetingLink: this.state.zoomMeetingLink,
        isTeacher: this.state.isTeacher,
        teacherID: this.state.teacherID,
        meetingType: this.state.typeOfClass,
        day: this.state.day,
        from: this.state.from,
        to: this.state.to,
        teacherEmail: this.state.teacherEmail,
      })
      .then(() => {
        this.props.history.push("/student-schedule");
        this.state.loading = false;
      })
      .catch(function (error) {
        this.state.loading = false;
        throw new Error("Error creating class!");
      });
  }

  handleTimeChange(time) {
    this.setState({ selectedTime: time });
  }

  checkForm() {
    return (
      this.state.className !== "" &&
      this.state.zoomMeetingID !== "" &&
      this.state.zoomMeetingLink !== "" &&
      this.state.meetingType !== "" &&
      this.state.day !== ""
    );
  }

  componentDidMount() {
    console.log(location);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Backdrop open={this.state.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <form onSubmit={this.createAClass}>
          <Container
            component="main"
            maxWidth="sm"
            style={{ marginBottom: 100 }}
          >
            <h1>
              <span role="img" aria-label="notepad">
                📝
              </span>
              &nbsp; Schedule a class
            </h1>

            <TextField
              style={{ width: "100%" }}
              required
              id="class-name"
              onChange={(e) => this.setState({ className: e.target.value })}
              label="Class name"
              variant="outlined"
            />
            <TextField
              style={{ width: "100%", marginTop: 15 }}
              required
              id="zoom-meeting-id"
              onChange={(e) => this.setState({ zoomMeetingID: e.target.value })}
              label="Zoom meeting ID"
              variant="outlined"
            />
            <TextField
              style={{ width: "100%", marginTop: 15 }}
              id="zoom-meeting-password"
              onChange={(e) =>
                this.setState({ zoomMeetingPassword: e.target.value })
              }
              label="Zoom meeting Password (Optional)"
              type="password"
              variant="outlined"
            />
            <TextField
              required
              style={{ width: "100%", marginTop: 15 }}
              id="zoom-meeting-link"
              onChange={(e) =>
                this.setState({ zoomMeetingLink: e.target.value })
              }
              label="Zoom meeting Link"
              variant="outlined"
            />
            <h4>Are you a teacher?</h4>
            <TextField
              required
              select
              defaultValue=""
              style={{ width: "100%" }}
              onChange={(e) => this.setState({ isTeacher: e.target.value })}
              id="is-teacher"
              variant="outlined"
            >
              <MenuItem key={0} value={true}>
                Yes
              </MenuItem>
              <MenuItem key={1} value={false}>
                No
              </MenuItem>
            </TextField>
            <h4>Type of class?</h4>
            <TextField
              required
              select
              defaultValue=""
              style={{ width: "100%" }}
              onChange={(e) => this.setState({ typeOfClass: e.target.value })}
              id="is-teacher"
              variant="outlined"
            >
              {this.meetingType.map((meeting, i) => (
                <MenuItem key={i} value={meeting}>
                  {meeting}
                </MenuItem>
              ))}
            </TextField>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <h4>Which day?</h4>
                <TextField
                  required
                  select
                  style={{}}
                  onChange={(e) => this.setState({ day: e.target.value })}
                  id="day"
                  variant="outlined"
                >
                  {this.days.map((day, i) => (
                    <MenuItem key={i} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <h4>From</h4>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardTimePicker
                    required
                    margin="normal"
                    id="from"
                    label="From"
                    onChange={(e) =>
                      this.setState({ from: moment(e).format("hh:mm a") })
                    }
                  />
                </MuiPickersUtilsProvider>
                {/* <TextField
                  id="time"
                  label="Alarm clock"
                  type="time"
                  defaultValue="07:30"
                  onChange={(e) => {
                    console.log(e.target.value);
                    this.setState({ from: e.target.value });
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                /> */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <h4>To</h4>
                {/* <TextField
                  id="time"
                  label="Alarm clock"
                  type="time"
                  onChange={(e) => {
                    console.log(e);
                    this.setState({ to: e });
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                /> */}
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardTimePicker
                    required
                    margin="normal"
                    id="from"
                    label="To"
                    onChange={(e) =>
                      this.setState({ to: moment(e).format("hh:mm a") })
                    }
                  />
                </MuiPickersUtilsProvider>
              </div>
            </div>

            <Button
              style={{ padding: 12, marginTop: 20 }}
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              onClick={(e) => {
                if (this.checkForm()) {
                  this.createAClass(e);
                }
              }}
            >
              Create class
            </Button>
          </Container>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setID: (newUserID) => dispatch({ type: "SET_USERID", payload: newUserID }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateClass)
);
