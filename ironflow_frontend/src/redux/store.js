import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import thunk from "redux-thunk";
import userReducer from "./reducers/user";
import draftReducer from "./reducers/draft";
import questionsReducer from "./reducers/questions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let devtools = composeEnhancers(applyMiddleware(thunk));

export default createStore(
  combineReducers({
    user: userReducer,
    questions: questionsReducer,
    draft: draftReducer
  }),
  devtools
);
