import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectReactProjects } from '../../redux/Projects/projects.selector';
import { Grid, Cell } from 'react-mdl';
import Project from './Project';

const ReactProjects = ({ projects }) => {
  return (
    <Grid className='projects-grid'>
      {/* { ...otherSectionProps }: One of the Destructuring assignment. Same key args. Eg. `name = {name}` */}
      {projects.map(({ ...otherSectionProps }, index) => (
        <Cell col={4} phone={12}>
          <Project key={index} {...otherSectionProps} />
        </Cell>
      ))}
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectReactProjects
});

export default connect(mapStateToProps)(ReactProjects);
