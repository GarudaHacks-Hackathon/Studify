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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClassGenerated from "./ClassGenerated";

class CreateClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.state = {
      selectedTime: new Date("2014-08-18T21:11:54"),
      meetingType: ["Lecture", "Tutorial", "Meeting"],
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    };
  }

  handleTimeChange(time) {
    this.setState({ selectedTime: time });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container component="main" maxWidth="sm" style={{ marginBottom: 100 }}>
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
            label="Class name"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginTop: 15 }}
            required
            id="zoom-meeting-id"
            label="Zoom meeting ID"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginTop: 15 }}
            id="zoom-meeting-password"
            label="Zoom meeting Password (Optional)"
            type="password"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginTop: 15 }}
            id="zoom-meeting-link"
            label="Zoom meeting Link (Optional)"
            variant="outlined"
          />
          <h4>Are you a teacher?</h4>
          <TextField
            required
            select
            style={{ width: "100%" }}
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
            style={{ width: "100%" }}
            id="is-teacher"
            variant="outlined"
          >
            {this.state.meetingType.map((meeting, i) => (
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
              <TextField select style={{}} id="day" variant="outlined">
                {this.state.days.map((day, i) => (
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
              {/* <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="from"
                  label="From"
                  value={this.state.selectedTime}
                  onChange={this.handleTimeChange}
                />
              </MuiPickersUtilsProvider> */}
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
              }}
            >
              <h4>To</h4>
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </div>
          </div>
          <Button
            style={{ width: "100%", padding: 12, marginTop: 20 }}
            variant="contained"
            color="primary"
          >
            <Link
              to="/class-generated"
              style={{ color: "white", textDecoration: "none" }}
            >
              Create class
            </Link>
          </Button>
        </Container>
      </div>
    );
  }
}

export default CreateClass;
