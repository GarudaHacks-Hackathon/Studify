import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 260,
    padding: 5,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
  },
});

function Class(props) {
  const state = {};

  const c = props.c.data;

  const classes = useStyles();

  return (
    <Card elevation={2} className={classes.root}>
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h5" component="h5" gutterBottom>
          {c.className}
        </Typography>
      </CardContent>

      <div style={{ paddingLeft: 12 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Chip
            variant="outlined"
            style={{ marginRight: 10 }}
            color="primary"
            label={c.meetingType}
          />
          <Chip
            variant="outlined"
            style={{ marginRight: 10 }}
            color="primary"
            label={c.day}
          />
        </div>
        <Typography
          variant="h6"
          component="h6"
          style={{ marginTop: 8 }}
          gutterBottom
        >
          {`${c.from} - ${c.to}`}
        </Typography>
      </div>
      <CardActions>
        <Button size="medium" style={{ color: "#34FFD8" }}>
          Join Now
        </Button>

        {props.deleteMode && (
          <Button
            size="medium"
            onClick={() => props.deleteClass(props.c.classID)}
            style={{ color: "#FF3472" }}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Class;
