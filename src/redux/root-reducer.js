import { combineReducers } from 'redux';
import projectsReducer from './Projects/projects.reducer';

const rootReducer = combineReducers({
  projects: projectsReducer
});

export default rootReducer;
