import React, { Component } from "react";

class LandingIcon extends Component {
  render() {
    const { url, icon } = this.props;
    return (
      <div className="Landing-social-links">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <i className={icon} aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default LandingIcon;
