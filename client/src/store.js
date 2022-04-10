import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducers } from "./reducers";

const initialState = {
  data: [
    {
      id: "0",
      name: "Vishal Patel Sir",
      company: "LA Galaxy",
      status: "Active",
      lastUpdated: "today",
      notes: "Start-up",
    },
    {
      id: "1",
      name: "Pratap",
      company: "DC United",
      status: "Closed",
      lastUpdated: "20 feb",
      notes: "good learner",
    },
    {
      id: "2",
      name: "Nischay Sharma",
      company: "Manchester United",
      status: "Active",
      lastUpdated: "yesterday",
      notes: "Noida remote",
    },
  ],
};

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
