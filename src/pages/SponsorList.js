import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import CircularProgress from "@material-ui/core/CircularProgress";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom";

import Sponsor from "../components/Sponsor";

class SponsorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      sponsors: [
        {
          sponsorName: "Jack Jackson",
          sponsorEmail: "abc@gmail.com",
          sponsorReason: "cuz i want to",
          sponsorClass: "Algorithms and Data Structures",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.state.loading && (
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "50vh" }}
            >
              <h1>👀 Getting sponsors, hang on tight...</h1>
              <CircularProgress />
            </Grid>
          )}
          {!this.state.loading && (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <h1 style={{ marginLeft: 50, padding: 10 }}>
                  🙋‍♂️ Your sponsors
                </h1>
                <Fab
                  style={{ alignSelf: "center", marginLeft: 10 }}
                  color="primary"
                  aria-label="add"
                  onClick={() => this.props.history.push("/create-sponsor")}
                >
                  <AddIcon />
                </Fab>
              </div>

              {this.state.sponsors.length == 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <h1>You have no sponsors!</h1>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 50,
                  paddingLeft: 10,
                }}
              >
                {this.state.sponsors.map((sponsor) => (
                  <Sponsor sponsor={sponsor} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(SponsorList);
