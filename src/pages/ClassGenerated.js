import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import copy from "clipboard-copy";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class ClassGenerated extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = { open: false };
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "50vh" }}
        >
          <h2>Class created! Here is the link to that class.</h2>
          <TextField
            id="studify-link"
            style={{ width: "40%" }}
            variant="outlined"
            defaultValue="www.studify.com/?data1=value1&data2=value2"
            variant="outlined"
            disabled
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
              onClick={() => {
                copy("www.studify.com/?data1=value1&data2=value2");
                this.setState({ open: true });
              }}
            >
              Copy
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10, marginLeft: 10 }}
            >
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Back to classes
              </Link>
            </Button>
          </div>

          <Snackbar
            open={this.state.open}
            autoHideDuration={2000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="success">
              Link copied to clipboard!
            </Alert>
          </Snackbar>
        </Grid>
      </div>
    );
  }
}

export default ClassGenerated;
