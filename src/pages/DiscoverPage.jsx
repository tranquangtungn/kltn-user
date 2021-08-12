import React, { Component } from "react";

import Genres from "../containers/Genres";

class DiscoverPage extends Component {
  render() {
    return (
      <div className="container-right" style={{ paddingBottom: "30px" }}>
        <Genres />
      </div>
    );
  }
}

export default DiscoverPage;
