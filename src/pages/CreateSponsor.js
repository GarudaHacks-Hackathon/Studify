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

class CreateSponsor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container component="main" maxWidth="sm">
          <h1>👋 Sponsor a person</h1>
          <TextField
            style={{ width: "100%" }}
            required
            id="sponsor-name"
            onChange={(e) => this.setState({ className: e.target.value })}
            label="Sponsor name"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginTop: 15 }}
            required
            id="sponsor-email"
            onChange={(e) => this.setState({ className: e.target.value })}
            label="Sponsor email"
            variant="outlined"
          />
          <h4>Select which class for the sponsor to participate</h4>
          <TextField
            required
            select
            style={{ width: "100%" }}
            id="class-list"
            variant="outlined"
          >
            {this.state.classes.map((c, i) => {
              return <MenuItem key={i}>{c.className}</MenuItem>;
            })}
          </TextField>
          <TextField
            multiline
            label="Additional reasons..."
            rows={10}
            style={{ width: "100%", height: "30%", marginTop: 15 }}
            id="sponsor-reason"
            variant="outlined"
          ></TextField>
          <Button
            style={{ padding: 12, marginTop: 25, marginBottom: 20 }}
            fullWidth
            variant="contained"
            type="submit"
            color="primary"
          >
            Request sponsor
          </Button>
        </Container>
      </div>
    );
  }
}

export default CreateSponsor;
