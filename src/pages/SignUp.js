import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import FormValidation from "../hooks/FormValidation";
import ValidateSignUp from "../hooks/ValidateSignUp";

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
export const db = firebase.firestore();

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  reenterpassword: "",
  role: "",
};

const useStyles = makeStyles((theme) => ({
  div: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    alignItems: "center",
  },

  typography: {
    marginTop: theme.spacing(2.5),
  },

  textField: {
    marginTop: theme.spacing(1),
    minWidth: 200,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },

  submit: {
    marginTop: theme.spacing(4),
    width: "100%",
    padding: 12,
    marginTop: 20,
  },
}));

function SignUp(props) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmitting,
    canEnter,
  } = FormValidation(initialState, ValidateSignUp);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [loading, setLoading] = useState(false);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    setLoading(true);
    const response = await auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection("users").add({
          firstName: firstName,
          lastName: lastName,
          accountType: accountType,
          email: email,
        });
        props.history.push("/");
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        throw new Error("Error signing up!");
      });
  };

  return (
    <Container maxWidth="sm">
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.div}>
        <Typography variant="h3" display="block" gutterBottom>
          Create Account
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="firstname"
                name="firstname"
                // value={values.firstname}
                error={errors.firstname}
                helperText={errors.firstname}
                label="First Name"
                autoComplete="firstname"
                margin="normal"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="lastname"
                name="lastname"
                // value={values.lastname}
                error={errors.lastname}
                helperText={errors.lastname}
                label="Last Name"
                autoComplete="lastname"
                margin="normal"
              />
            </Grid>
          </Grid>

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
                // value={values.email}
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
                // value={values.password}
                error={errors.password}
                helperText={errors.password}
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="reenterpassword"
                name="reenterpassword"
                // value={values.reenterpassword}
                error={errors.reenterpassword}
                helperText={errors.reenterpassword}
                label="Re-enter Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </Grid>
          </Grid>

          <Typography
            className={classes.typography}
            variant="body1"
            display="block"
            gutterBottom
          >
            Are you a student or a teacher/lecturer?
          </Typography>

          <TextField
            onChange={(e) => setAccountType(e.target.value)}
            onBlur={handleBlur}
            className={classes.textField}
            required
            select
            id="role"
            name="role"
            // value={values.role}
            error={errors.role}
            helperText={errors.role}
            variant="outlined"
          >
            <MenuItem key={0} value="Student">
              Student
            </MenuItem>
            <MenuItem key={1} value="Teacher">
              Teacher/Lecturer
            </MenuItem>
          </TextField>

          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            margin="normal"
            disabled={isSubmitting}
            onClick={(e) => {
              createUserWithEmailAndPasswordHandler(e, email, password);
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp);
