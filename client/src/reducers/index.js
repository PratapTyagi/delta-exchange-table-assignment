import { combineReducers } from "redux";
import { dataReducer } from "./Data";

export const rootReducers = combineReducers({ data: dataReducer });
