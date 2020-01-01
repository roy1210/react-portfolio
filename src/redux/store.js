import { createStore } from "redux";
import rootReducer from "./root-reducer";

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, reduxDevTool);
