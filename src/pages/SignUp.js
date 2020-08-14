import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

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

    formControl: {
        marginTop: theme.spacing(1),
        minWidth: 200,
    },

    submit: {
        marginTop: theme.spacing(4),
    },
}));

function SignUp() {
    const classes = useStyles();
    const [role, setRole] = React.useState('');

    const changeRole = (event) => {
        setRole(event.target.value);
    };

    return (
        <Container maxWidth="sm">
            <div className={classes.div}>
                <Typography variant="h3" display="block" gutterBottom>
                    Create Account
                </Typography>

                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined" 
                                required
                                fullWidth
                                id="firstname"
                                name="firstname"
                                label="First Name" 
                                autoComplete="firstname"
                                margin="normal"
                            />
                        </Grid>
                    
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined" 
                                required
                                fullWidth
                                id="lastname"
                                name="lastname"
                                label="Last Name" 
                                autoComplete="lastname"
                                margin="normal"
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined" 
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address" 
                                autoComplete="email"
                                margin="normal"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined" 
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password" 
                                type="password"
                                autoComplete="current-password"
                                margin="normal" 
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined" 
                                required
                                fullWidth
                                id="re-enter-password"
                                name="re-enter-password"
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

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="role">Role</InputLabel>
                        <Select
                            native
                            id="role"
                            label="Role"
                            value={role}
                            onChange={changeRole}
                        >
                            <option value={"Student"}>Student</option>
                            <option value={"Teacher/Lecturer"}>Teacher/Lecturer</option>
                        </Select>
                    </FormControl>

                    <Button 
                        className={classes.submit}
                        variant="contained" 
                        color="primary"
                        type="submit"
                        fullWidth
                        margin="normal"
                    >
                        Sign Up
                    </Button>
                    
                </form>
            </div>
        </Container>
    )
}

export default SignUp