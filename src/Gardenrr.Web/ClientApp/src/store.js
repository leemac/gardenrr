import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";

import logger from "redux-logger";

const middlewares = [];

middlewares.push(thunk);

middlewares.push(logger);

const middleware = applyMiddleware(...middlewares);
const store = createStore(rootReducer, middleware);

export default store;
