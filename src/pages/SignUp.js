import React from 'react';
import { withRouter } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import FormValidation from '../hooks/FormValidation';
import ValidateSignUp from '../hooks/ValidateSignUp';

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    reenterpassword: "",
    role: "",
}

const useStyles = makeStyles(theme => ({
    div: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%',
        alignItems: 'center',
    },

    typography: {
        marginTop: theme.spacing(2.5),
    },

    textField: {
        marginTop: theme.spacing(1),
        minWidth: 200,
    },

    submit: {
        marginTop: theme.spacing(4),
        width: "100%",
        padding: 12,
        marginTop: 20,
    },
}));

function SignUp(props) {
    const { handleChange, handleSubmit, handleBlur, values, errors, isSubmitting, canEnter } = FormValidation(initialState, ValidateSignUp);
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <div className={classes.div}>
                <Typography variant="h3" display="block" gutterBottom>
                    Create Account
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined" 
                                required
                                fullWidth
                                id="firstname"
                                name="firstname"
                                value={values.firstname}
                                error={errors.firstname}
                                helperText={errors.firstname}
                                label="First Name" 
                                autoComplete="firstname"
                                margin="normal"
                            />
                        </Grid>
                    
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined" 
                                required
                                fullWidth
                                id="lastname"
                                name="lastname"
                                value={values.lastname}
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

                        <Grid item xs={12}>
                            <TextField 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined" 
                                required
                                fullWidth
                                id="reenterpassword"
                                name="reenterpassword"
                                value={values.reenterpassword}
                                error={errors.reenterpassword}
                                helperText={errors.reenterpassword}
                                label="Re-enter Password" 
                                type="password"
                                autoComplete="current-password"
                                margin="normal" 
                            />
                        </Grid>
                    </Grid>
                    
                    <Typography className={classes.typography} variant="body1" display="block" gutterBottom>
                        Are you a student or a teacher/lecturer?
                    </Typography>

                    <TextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={classes.textField}
                        required
                        select
                        id="role"
                        name="role"
                        value={values.role}
                        error={errors.role}
                        helperText={errors.role}
                        variant="outlined"
                    >
                        <MenuItem key={0} value="Student">
                        Student
                        </MenuItem>
                        <MenuItem key={1} value="Teacher/Lecturer">
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
                        onClick={() => {
                            if (canEnter) {
                                props.history.push("/");
                            }
                        }}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default withRouter(SignUp);