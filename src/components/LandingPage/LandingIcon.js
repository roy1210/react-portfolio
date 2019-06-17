import React, { Component } from "react";

class LandingIcon extends Component {
  render() {
    return (
      <div className="Landing-social-links">
        <a href={this.props.url} rel="noopener noreferrer" target="_blank">
          <i className={this.props.icon} aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default LandingIcon;
