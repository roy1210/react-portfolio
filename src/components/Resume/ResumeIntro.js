import React, { Component } from "react";
class ResumeIntro extends Component {
  render() {
    return (
      <div>
        <h4 className="Resume-name">Shoe Kure (Roy, 呉 書栄)</h4>
        <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
        <div className="Resume-intro">
          <h5>Hello, world!</h5>
          <p>
            My name is Roy.
            <br />
            I'm a happy learner and I love to learn about new technology every
            day.
            <br />
            I communicate well with people from different culutures.
            <br />
            I'd like to dive into the tech industry because this is the place to
            use technology to make the world a better place!
            <br />
            Now, I'm ready to contribute as a software developer in the global
            environment.
          </p>
        </div>
        <div className="Resume-contact">
          <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          <i className="fas fa-map-marked-alt" aria-hidden="true" />
          <span>Singapore</span>
          <br />
          <i className="fas fa-passport" aria-hidden="true" />
          <span className="Resume-contact-adj">Japan</span>
          <br />
          <i className="fab fa-skype" aria-hidden="true" />
          <span className="Resume-contact-adj">roy_shoe_wu</span>
          <br />
          <i className="fa fa-envelope" aria-hidden="true" />
          <a href="mailto:rswkure@gmail.com">rswkure@gmail.com</a>
          <br />
          <div className="Resume-linkedin">
            <i className="fab fa-linkedin" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/roy1210/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.linkedin.com/in/roy1210/
            </a>
          </div>
          <i className="fab fa-github" aria-hidden="true" />
          <a
            href="https://github.com/roy1210"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/roy1210
          </a>
          <br />
          <div className="Resume-home">
            <i className="fas fa-home" aria-hidden="true" />
            <a
              href="https://github.com/roy1210"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://roy-k.tk/
            </a>
          </div>
          <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
        </div>
      </div>
    );
  }
}

export default ResumeIntro;
