import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

export class HomePage extends Component {
  ComponenDidMount() {
    console.log("component mounted");
  }
  render() {
    function api(endpoint, { method = "GET", body, jwt } = {}) {
      return fetch(
        "https://codaisseur-coders-network.herokuapp.com" + endpoint,
        {
          method: method,
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      )
        .then(response => Promise.all([response.status, response.json()]))
        .then(([status, data]) => {
          if (status >= 400) {
            throw { api_error: data };
          } else {
            return data;
          }
        });
    }
    console.log("teest");
    console.log(
      "test",
      api("/posts?limits=10").then(data => console.log(data.rows))
    );
    console.log(this.props)
    return (
      <Fragment>
        <Typography paragraph>Show some Posts</Typography>
      </Fragment>
    );
  }
}

export default HomePage;
