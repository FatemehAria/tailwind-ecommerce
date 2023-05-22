import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { products , cartItems } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ products , cartItems});
const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware) );
export default store;
