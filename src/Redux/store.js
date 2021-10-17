import { reducer } from "./reducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const rootReducer = combineReducers({ reducer });

const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(...middleware)))
);

window.store = store;
export default store;
