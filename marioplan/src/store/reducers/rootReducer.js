import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
