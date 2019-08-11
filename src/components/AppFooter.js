import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectReactProjects } from "../redux/Projects/projects.selector";

const AppFooter = ({ projects }) => {
  const thisYear = new Date().getFullYear();
  const myPortfolioCodesandbox = projects[0].codesandbox;

  return (
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
};

const mapStateToProps = createStructuredSelector({
  projects: selectReactProjects
});

export default connect(mapStateToProps)(AppFooter);
