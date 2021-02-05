import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = createStore(
  combineReducers({
    user: userReducer
  }),
  composeEnhancer(applyMiddleware(thunk))
);
export default configureStore;
