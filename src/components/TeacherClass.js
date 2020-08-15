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
    marginTop: 20,
    marginBottom: 20,
  },
});

function Class(props) {
  const state = {};

  const classes = useStyles();

  return (
    <Card elevation={2} className={classes.root}>
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h5" component="h5" gutterBottom>
          {props.c.className}
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
            label={`${props.c.studentCount} students`}
          />
          <Chip
            variant="outlined"
            style={{ marginRight: 10 }}
            color="primary"
            label={props.c.meetingType}
          />
          <Chip
            variant="outlined"
            style={{ marginRight: 10 }}
            color="primary"
            label={props.c.day}
          />
        </div>
        <Typography
          variant="h6"
          component="h6"
          style={{ marginTop: 8 }}
          gutterBottom
        >
          {`${moment(props.c.from, "hh:mm:ss A").format("hh:mm A")} - ${moment(
            props.c.to,
            "hh:mm:ss A"
          ).format("hh:mm A")}`}
        </Typography>
      </div>
      <CardActions>
        <Button
          onClick={() => window.open(props.c.zoomMeetingLink, "_blank")}
          size="medium"
          style={{ color: "#34FFD8" }}
        >
          Start
        </Button>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/manage-class",
            state: {
              className: props.c.className,
              zoomMeetingID: props.c.zoomMeetingID,
              zoomMeetingPassword: props.c.zoomMeetingPassword,
              zoomMeetingLink: props.c.zoomMeetingLink,
              day: props.c.day,
              from: props.c.from,
              to: props.c.to,
            },
          }}
        >
          <Button size="medium" style={{ color: "#9900FF" }}>
            Manage
          </Button>
        </Link>
        {props.deleteMode && (
          <Button
            size="medium"
            onClick={() => props.deleteClass(props.className)}
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
