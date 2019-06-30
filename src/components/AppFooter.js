import React from "react";

const thisYear = new Date().getFullYear();
const AppFooter = () => (
  <div className="AppFooter">
    <small>© {thisYear} Shoe Kure</small>
    <br />
    <span className="AppFooter-made-with">Made with</span>

    <span className="AppFooter-react">
      <a
        href="https://codesandbox.io/s/my-portfolio-qmqcp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-react" />
        {"\u00A0"}
        React.js
      </a>
    </span>
  </div>
);

export default AppFooter;
