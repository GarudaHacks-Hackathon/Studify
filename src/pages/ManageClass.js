import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import moment from "moment";
import { withRouter } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ManageClass(props) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [className, setClassName] = useState(location.state.className);
  const [zoomMeetingID, setZoomMeetingID] = useState(
    location.state.zoomMeetingID
  );
  const [zoomMeetingPassword, setZoomMeetingPassword] = useState(
    location.state.zoomMeetingPassword
  );
  const [zoomMeetingLink, setZoomMeetingLink] = useState(
    location.state.zoomMeetingLink
  );
  const [day, setDay] = useState(location.state.day);
  const [from, setFrom] = useState(location.state.from);
  const [to, setTo] = useState(location.state.to);
  const state = {
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

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="sm">
        <h1>🛠 {location.state.className}</h1>
        <TextField
          style={{ width: "100%" }}
          required
          id="class-name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          label="Class name"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%", marginTop: 15 }}
          required
          value={zoomMeetingID}
          id="zoom-meeting-id"
          label="Zoom meeting ID"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%", marginTop: 15 }}
          id="zoom-meeting-password"
          value={zoomMeetingPassword}
          label="Zoom meeting Password (Optional)"
          type="password"
          variant="outlined"
        />
        <TextField
          required
          value={zoomMeetingLink}
          style={{ width: "100%", marginTop: 15 }}
          id="zoom-meeting-link"
          label="Zoom meeting Link"
          variant="outlined"
        />
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
              value={day}
              required
              select
              style={{}}
              id="day"
              variant="outlined"
            >
              {state.days.map((day, i) => (
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
            <TextField
              id="time"
              label="From"
              type="time"
              mode="24h"
              defaultValue={moment(from, ["hh:mm:ss a"]).format("HH:mm")}
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
              mode="24h"
              defaultValue={moment(to, ["hh:mm:ss a"]).format("HH:mm")}
              label="To"
              type="time"
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
          style={{ padding: 12, marginTop: 36 }}
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
          onClick={() => {
            if (true) {
              setOpen(true);
              setTimeout(() => props.history.push("/teacher-schedule"), 2500);
            }
          }}
        >
          Make changes
        </Button>
      </Container>

      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Class successfully updated! Changes are updated to all students.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default withRouter(ManageClass);
