import { combineReducers } from "redux";

import designer from "./designer/duck/reducer";

const rootReducer = combineReducers({
  designer
});

export default rootReducer;
