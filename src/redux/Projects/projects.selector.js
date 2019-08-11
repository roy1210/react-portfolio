import { createSelector } from 'reselect';

const selectProjects = state => state.projects;

export const selectReactProjects = createSelector(
  [selectProjects],
  projects => projects.reactProjects
);

export const selectDappsProjects = createSelector(
  [selectProjects],
  projects => projects.dappsProjects
);

export const selectVueProjects = createSelector(
  [selectProjects],
  projects => projects.vueProjects
);

export const selectGolangProjects = createSelector(
  [selectProjects],
  projects => projects.golangProjects
);
