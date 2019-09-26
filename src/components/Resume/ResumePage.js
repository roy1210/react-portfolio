import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ResumeEducations from './ResumeEducation/ResumeEducations';
import ResumeExperiences from './ResumeExperience/ResumeExperiences';
import ResumeSkills from './ResumeSkills/ResumeSkills';
import ResumeIntroduction from './ResumeIntroduction';
import AppFooter from '../AppFooter';
import InBarcerona from '../../img/BarceronaProfile.jpg';
import '../../CSS/Resume.css';

class ResumePage extends Component {
  render() {
    return (
      <div className='Resume'>
        <Grid>
          <Cell col={4} phone={12} tablet={12}>
            <div className='Resume-fade-in one Resume-avatar'>
              <img src={InBarcerona} alt='avatar' />
            </div>
            <div className='Resume-fade-in two'>
              <ResumeIntroduction />
            </div>
          </Cell>
          <Cell className='Resume-right-col' col={8} phone={12} tablet={12}>
            <div className='Resume-fade-in three'>
              <div className='Resume-skills'>
                <ResumeSkills />
              </div>
              <div className='Resume-education-job'>
                <ResumeEducations />
                <ResumeExperiences />
              </div>
            </div>
          </Cell>
        </Grid>
        <section style={{ marginBottom: '1em' }} />
        <div className='Resume-footer'>
          <AppFooter />
        </div>
      </div>
    );
  }
}
export default ResumePage;
