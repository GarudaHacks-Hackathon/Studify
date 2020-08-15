import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Class from "../components/Class";
import Navbar from "../components/Navbar";
import "../css/StudentSchedule.css";
import { createBrowserHistory } from "history";
import { config } from "../config";
import firebase from "../firebase";

const history = createBrowserHistory();

// Get the current location.
const location = history.location;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class StudentSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.closeDialog = this.closeDialog.bind(this);
    this.fetchClass = this.fetchClass.bind(this);
    this.closeCreateClassDialog = this.closeCreateClassDialog(this);
    this.deleteClass = this.deleteClass.bind(this);
    this.generateClass = this.generateClass.bind(this);
    this.state = {
      userID: "",
      studifyLink: "",
      createClassDialog: false,
      deletedClass: "",
      deleteClassDialog: false,
      loading: true,
      deleteMode: false,
      classes: [],
    };
  }

  closeDialog() {
    this.setState({ deleteClassDialog: false });
  }

  closeCreateClassDialog() {
    this.setState({ createClassDialog: false });
  }

  async deleteClass(class_id) {
    this.setState({ loading: true });
    const user_id = this.props.userID;
    console.log(class_id);
    db.collection("users")
      .doc(user_id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          db.collection("users")
            .doc(user_id)
            .collection("classes")
            .get()
            .then((classes) => {
              if (classes.docs.length > 0) {
                db.collection("users")
                  .doc(user_id)
                  .collection("classes")
                  .doc(class_id)
                  .delete()
                  .then(() => {
                    this.fetchClass();
                    this.setState({ loading: false });
                  });
              }
            });
        }
      });
    // this.setState({ deletedClass: className, deleteClassDialog: true });
    // console.log(className);
  }

  generateClass() {
    console.log(this.state.studifyLink);
    this.setState({ loading: true, createClassDialog: false });
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  async fetchClass() {
    let schedule = [];
    this.setState({ userID: this.props.userID });
    const response = await db
      .collection("users")
      .doc(this.props.userID)
      .collection("classes")
      .get();

    response.docs.map((doc) =>
      schedule.push({ classID: doc.id, data: doc.data() })
    );
    console.log(schedule);
    this.setState({ classes: schedule });
  }

  confirmDeleteClass() {
    console.log(`${this.state.deletedClass} deleted!`);
    this.setState({
      classes: this.state.classes.filter(
        (c) => c.className != this.state.deletedClass
      ),
      deletedClass: "",
      deleteClassDialog: false,
      deleteMode: false,
    });
  }

  async componentDidMount() {
    let schedule = [];
    this.setState({ userID: this.props.userID });
    const response = await db
      .collection("users")
      .doc(this.props.userID)
      .collection("classes")
      .get();

    response.docs.map((doc) =>
      schedule.push({ classID: doc.id, data: doc.data() })
    );
    console.log(schedule);
    this.setState({ classes: schedule });
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    return (
      <div>
        <Navbar />

        <div>
          {this.state.loading && (
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "50vh" }}
            >
              <h1>👀 Getting your schedule, hang on tight...</h1>
              <CircularProgress />
            </Grid>
          )}
          {!this.state.loading && (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <h1 style={{ marginLeft: 50, padding: 10 }}>🗓️ Your classes</h1>
                <Fab
                  style={{ alignSelf: "center", marginLeft: 10 }}
                  color="primary"
                  aria-label="add"
                  onClick={() => {
                    console.log(location);
                    this.props.history.push({
                      pathname: "/create-class",
                      state: { userID: this.props.userID },
                    });
                    this.setState({ createClassDialog: false });
                  }}
                >
                  <AddIcon />
                </Fab>
                <Fab
                  style={{ alignSelf: "center", marginLeft: 12 }}
                  color="secondary"
                  aria-label="edit"
                  onClick={() =>
                    this.setState({ deleteMode: !this.state.deleteMode })
                  }
                >
                  <EditIcon />
                </Fab>
              </div>

              {this.state.classes.length == 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <h1>
                    Your schedule is empty! Start by creating some classes.
                  </h1>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: 50,
                  paddingLeft: 10,
                }}
              >
                {this.state.classes.map((c) => (
                  <Class
                    c={c}
                    offline={true}
                    deleteMode={this.state.deleteMode}
                    deleteClass={this.deleteClass}
                  />
                ))}
              </div>
            </div>
          )}
          <Dialog
            open={this.state.deleteClassDialog}
            onClose={this.closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{`Delete ${this.state.deletedClass}?`}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This process cannot be reversed!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.closeDialog()}>Cancel</Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => this.confirmDeleteClass()}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.createClassDialog}
            onClose={this.closeCreateClassDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle id="alert-dialog-title">Add a class</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
              {/* <TextField
                autoFocus
                fullWidth
                margin="dense"
                type="email"
                id="studify-link"
                onChange={(e) => this.setState({ studifyLink: e.target.value })}
                label="Enter studify class link here"
              />
              <Button
                style={{ marginTop: 5 }}
                variant="contained"
                color="primary"
                onClick={() => this.generateClass()}
              >
                Generate
              </Button> */}
              {/* <h3>OR</h3> */}
              <Button
                style={{ marginTop: 5 }}
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log(location);
                  this.props.history.push({
                    pathname: "/create-class",
                    state: { userID: this.props.userID },
                  });
                  this.setState({ createClassDialog: false });
                }}
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/create-class",
                    state: {
                      userID: this.props.userID,
                    },
                  }}
                >
                  Create a new class
                </Link>
              </Button>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
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
  connect(mapStateToProps, mapDispatchToProps)(StudentSchedule)
);
