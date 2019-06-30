import React from "react";

const LandingIcon = ({ url, icon }) => (
  <div className="Landing-social-links">
    <a href={url} rel="noopener noreferrer" target="_blank">
      <i className={icon} aria-hidden="true" />
    </a>
  </div>
);

export default LandingIcon;
