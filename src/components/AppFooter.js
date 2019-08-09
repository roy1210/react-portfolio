import React from "react";
import { REACT_PROJECTS_DATA } from "./Projects/Projects.data";

const thisYear = new Date().getFullYear();
const myPortfolioCodesandbox = REACT_PROJECTS_DATA[0].codesandbox;

const AppFooter = () => (
  <div className="AppFooter">
    <small>© {thisYear} Shoe Kure</small>
    <br />
    <div className="AppFooter-made-with-react">
      <span className="AppFooter-made-with">Made with</span>
      <span className="AppFooter-react">
        <a
          href={myPortfolioCodesandbox}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-react" />
          {"\u00A0"}
          React.js
        </a>
      </span>
    </div>
  </div>
);

export default AppFooter;
