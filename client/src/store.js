import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducers } from "./reducers";

const currentData = localStorage.getItem("tableData")
  ? JSON.parse(localStorage.getItem("tableData"))
  : {};

const initialValue = {
  id: "0",
  name: "Pratap",
  company: "DC United",
  status: "Closed",
  lastUpdated: "20/2/22",
  notes: "good learner",
};

const initialState = Object.keys(currentData).length
  ? {
      data: [initialValue, ...currentData],
    }
  : {
      data: [initialValue],
    };
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
