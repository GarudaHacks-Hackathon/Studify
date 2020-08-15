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

function SponsorDetails(props) {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="sm">
        <h1>Sponsor details</h1>
        <TextField
          style={{ width: "100%" }}
          id="sponsor-name"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={location.state.sponsor.sponsorName}
          label="Sponsor name"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%", marginTop: 15 }}
          id="sponsor-email"
          InputProps={{
            readOnly: true,
          }}
          label="Sponsor email"
          defaultValue={location.state.sponsor.sponsorEmail}
          variant="outlined"
        />
        <TextField
          style={{ width: "100%", marginTop: 15 }}
          id="class-list"
          label="Requesting class for sponsor"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={location.state.sponsor.sponsorClass}
        >
          Algorithms
        </TextField>
        <TextField
          multiline
          label="Additional reasons..."
          rows={10}
          style={{ width: "100%", height: "30%", marginTop: 15 }}
          id="sponsor-reason"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={location.state.sponsor.sponsorReason}
        ></TextField>
        <Button
          style={{ padding: 12, marginTop: 25, marginBottom: 20 }}
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
        >
          Approve sponsor
        </Button>
      </Container>
    </div>
  );
}

export default SponsorDetails;
