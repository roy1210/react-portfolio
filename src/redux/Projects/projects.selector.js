import { createSelector } from "reselect";

const selectProjects = state => state.projects;

export const selectReactProjects = createSelector(
  [selectProjects],
  projects => projects.reactProjects
);
export const selectTypeScriptProjects = createSelector(
  [selectProjects],
  projects => projects.typescriptProjects
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

export const selectOthersProjects = createSelector(
  [selectProjects],
  projects => projects.othersProjects
);
