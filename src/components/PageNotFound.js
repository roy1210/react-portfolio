import React, { Component } from "react";
import "../CSS/PageNotFound.css";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

class PageNotFound extends Component {
  render() {
    return (
      <div className="PageNotFound">
        <div className="PageNotFound-bg-purple">
          <div className="PageNotFound-stars">
            <div className="PageNotFound-central-body">
              <img
                className="PageNotFound-image-404"
                src="http://salehriaz.com/404Page/img/404.svg"
                width="300px"
                alt="404"
              />
              <Link
                to="/"
                component={LandingPage}
                className="PageNotFound-btn-go-home"
              >
                BRING ME HOME
              </Link>
            </div>
            <div className="PageNotFound-objects">
              <img
                className="PageNotFound-object_rocket"
                src="http://salehriaz.com/404Page/img/rocket.svg"
                width="40px"
                alt="404"
              />
              <div className="PageNotFound-earth-moon">
                <img
                  className="PageNotFound-object_earth"
                  src="http://salehriaz.com/404Page/img/earth.svg"
                  width="100px"
                  alt="404"
                />
                <img
                  className="PageNotFound-object_moon"
                  src="http://salehriaz.com/404Page/img/moon.svg"
                  width="80px"
                  alt="404"
                />
              </div>
              <div className="PageNotFound-box_astronaut">
                <img
                  className="PageNotFound-object_astronaut"
                  src="http://salehriaz.com/404Page/img/astronaut.svg"
                  width="140px"
                  alt="404"
                />
              </div>
            </div>
            <div className="PageNotFound-glowing_stars">
              <div className="PageNotFound-star" />
              <div className="PageNotFound-star" />
              <div className="PageNotFound-star" />
              <div className="PageNotFound-star" />
              <div className="PageNotFound-star" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Ref: https://codepen.io/salehriaz/pen/erJrZM

export default PageNotFound;
