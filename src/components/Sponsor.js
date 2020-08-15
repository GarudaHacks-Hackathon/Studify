import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import moment from "moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20,
  },
});

function Class(props) {
  const state = {};

  const classes = useStyles();

  console.log(props.sponsor);

  return (
    <Card elevation={2} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h5" gutterBottom>
          Jack Jackson
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          Algorithms and Data Structures
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/sponsor-details",
            state: { sponsor: props.sponsor },
          }}
        >
          <Button size="medium" style={{ color: "#9900FF" }}>
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Class;
