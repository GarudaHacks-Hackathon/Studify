import React from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import zoom_logo from '../zoom-logo.svg';

const useStyles = makeStyles(theme => ({
    div: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    avatar: {
        margin: theme.spacing(2),
        width: 70,
        height: 70
    },

    form: {
        width: '100%',
        margin: theme.spacing(1),
        alignItems: 'center'
    },

    submit: {
        marginTop: theme.spacing(2)
    },

    grid: {
        marginTop: theme.spacing(1)
    }

}));

function Login() {
    const classes = useStyles();

    return (
        <Container maxWidth="xs">

            <div className={classes.div}>
                <Avatar src={zoom_logo} className={classes.avatar} />

                <Typography variant="h2" gutterBottom>
                    Studify
                </Typography>

                <form className={classes.form}>
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

                    <Button 
                        className={classes.submit}
                        variant="contained" 
                        color="primary"
                        type="submit"
                        fullWidth
                        margin="normal"
                    >
                        Login
                    </Button>

                    <Grid
                        className={classes.grid}
                        container
                        xs={12}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Link href="#" variant="body2">
                            Not a member? Register here
                        </Link>
                    </Grid>
                    

                    
                </form>

                
            </div>

        </Container>
    )
}

export default Login