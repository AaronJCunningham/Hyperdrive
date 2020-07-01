import React, { Component } from "react";
import { Link } from "react-router-dom";

class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="background">
          <Link to="/hyperdrive">
            <button>Are you ready to party?</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Loading;
