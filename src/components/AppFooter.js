import React, { Component, Fragment } from "react";

class AppFooter extends Component {
  render() {
    const thisYear = new Date().getFullYear();
    return (
      <Fragment>
        <small>© {thisYear} Shoe Kure</small>
      </Fragment>
    );
  }
}

export default AppFooter;
