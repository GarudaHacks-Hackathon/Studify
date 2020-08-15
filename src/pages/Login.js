import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import FormValidation from "../hooks/FormValidation";
import ValidateLogin from "../hooks/ValidateLogin";
import zoom_logo from "../zoom-logo.svg";
import "../css/Login.css";

import firebase from "../firebase";

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

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  div: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },

  avatar: {
    margin: theme.spacing(2),
    width: 70,
    height: 70,
  },

  form: {
    width: "100%",
    alignItems: "center",
  },

  submit: {
    marginTop: theme.spacing(2),
    width: "100%",
    padding: 12,
    marginTop: 20,
  },

  grid: {
    marginTop: theme.spacing(1),
  },
}));

const initialState = {
  email: "",
  password: "",
};

function Login(props) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmitting,
    canEnter,
  } = FormValidation(initialState, ValidateLogin);
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const signIn = async (event, email, password) => {
    event.preventDefault();
    setLoading(true);
    const response = await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        props.history.push("/student-schedule");
      })
      .catch((error) => {
        setLoading(false);
        setOpen(true);
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          Invalid email address or password!
        </Alert>
      </Snackbar>
      <div className={classes.div}>
        <Avatar src={zoom_logo} className={classes.avatar} />

        <Typography
          style={{ fontFamily: "Somatic", fontSize: 70 }}
          variant="h2"
          gutterBottom
        >
          Studify
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                error={errors.email}
                helperText={errors.email}
                label="Email Address"
                autoComplete="email"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                error={errors.password}
                helperText={errors.password}
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </Grid>
          </Grid>

          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            margin="normal"
            disabled={isSubmitting}
            onClick={(e) => {
              signIn(e, email, password);
            }}
          >
            Login
          </Button>

          <Grid
            className={classes.grid}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Link to="/signup">Not a member? Register here</Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(Login);
