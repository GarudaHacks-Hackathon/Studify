import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Studify
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ width: 120 }}
        anchor="left"
        open={state}
        width="50%"
        onClose={() => setState(false)}
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: 15 }}
          direction="column"
          flexWrap="wrap"
        >
          <Avatar className={classes.large}>
            <PersonIcon fontSize="large" />
          </Avatar>
          <h2>Student</h2>
        </Grid>
        <Divider variant="middle" />
        <List style={{ width: 250 }} component="nav">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/student-schedule"
          >
            <ListItem button>
              <ListItemIcon>🗓️</ListItemIcon>
              <ListItemText primary="My classes" />
            </ListItem>
          </Link>
          {/* <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/sponsor-list"
          >
            <ListItem button>
              <ListItemIcon>✉️</ListItemIcon>
              <ListItemText primary="My sponsors" />
            </ListItem>
          </Link> */}
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
