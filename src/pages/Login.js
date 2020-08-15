import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import FormValidation from '../hooks/FormValidation';
import ValidateLogin from '../hooks/ValidateLogin';
import zoom_logo from "../zoom-logo.svg";
import "../css/Login.css";

const useStyles = makeStyles((theme) => ({
  div: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
}

function Login(props) {
  const { handleChange, handleSubmit, handleBlur, values, errors, isSubmitting, canEnter } = FormValidation(initialState, ValidateLogin);
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
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
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                value={values.email}
                error={errors.email}
                helperText={errors.email}
                label="Email Address"
                autoComplete="email"
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
                id="password"
                name="password"
                value={values.password}
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
            onClick={() => {
              if (canEnter) {
                props.history.push("/student-schedule");
              }
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
