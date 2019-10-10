import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import LandingPlayground from './LandingPlayground';
import AppFooter from '../AppFooter';
import LandingIcon from './LandingIcon';
import Profile from '../../img/Profile.jpg';
import '../../CSS/Landing.css';

class LandingPage extends Component {
  // componentDidMount() {
  //   document.title = "Roy";
  // }
  render() {
    return (
      <div className='Landing-container'>
        <Grid className='Landing-grid'>
          <Cell col={12} phone={12} tablet={12}>
            <div className='Landing-SlideDown'>
              <div className='Landing-phone-profile'>
                <img src={Profile} alt='profile' />
              </div>
              <LandingPlayground />
              <div className='Landing-banner-text'>
                <h3>Hi, this is Roy. Nice to meet you.</h3>
                <h4>Web / Blockchain Developer</h4>
                <hr />
                <p>
                  <span className='Landing-javascript'>JavaScript</span> |{' '}
                  <span className='Landing-typescript'>TypeScript</span> |{' '}
                  <span className='Landing-react'>React</span> |{' '}
                  <span className='Landing-firebase'>Firebase</span> |{' '}
                  <span className='Landing-python'>Python</span> |{' '}
                  <span className='Landing-golang'>Golang</span> |{' '}
                  <span className='Landing-solidity'>Solidity</span>
                </p>
                <div className='Landing-social-links'>
                  <LandingIcon
                    url='https://www.linkedin.com/in/shoe-kure-2271ab90/'
                    iconClass='fa-linkedin'
                    iconName='faLinkedin'
                  />
                  <LandingIcon
                    url='https://github.com/roy1210'
                    iconClass='fa-github'
                    iconName='faGithub'
                  />
                  <LandingIcon
                    url='https://codesandbox.io/u/roy1210/sandboxes'
                    iconClass='fa-cube'
                    iconName='faCube'
                  />
                </div>
              </div>
            </div>
            <div className='Landing-marginBottom' />
            <div className='Landing-footer'>
              <AppFooter />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
