import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducers } from "./reducers";

const currentData = localStorage.getItem("tableData")
  ? JSON.parse(localStorage.getItem("tableData"))
  : {};

const initialState = Object.keys(currentData).length
  ? {
      data: [...currentData],
    }
  : {
      data: [],
    };
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
