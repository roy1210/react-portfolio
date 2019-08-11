import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDappsProjects } from '../../redux/Projects/projects.selector';
import { Grid, Cell } from 'react-mdl';
import Project from './Project';

const DappsProjects = ({ projects }) => {
  return (
    <Grid className='projects-grid'>
      {projects.map(({ ...otherSectionProps }, index) => (
        <Cell col={4} phone={12}>
          <Project key={index} {...otherSectionProps} />
        </Cell>
      ))}
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectDappsProjects
});

export default connect(mapStateToProps)(DappsProjects);
