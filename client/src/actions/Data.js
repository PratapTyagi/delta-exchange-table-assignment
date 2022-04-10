import { ADD_DATA, DELETE_DATA } from "./actionTypes";
import { v4 as uuid } from "uuid";

// Create data
export const createData = (data) => (dispatch, getState) => {
  let lastIndex = getState().data;
  lastIndex = lastIndex.slice(-1)[0].id;
  const newData = { id: lastIndex, ...data };

  dispatch({ type: ADD_DATA, payload: newData });
  const updatedData = getState().data;
  localStorage.setItem("tableData", updatedData);
};

// Read data
export const getData = () => (dispatch) => {
  return localStorage.getItem("tableData")
    ? JSON.parse(localStorage.getItem("tableData"))
    : null;
};

// Delete data
export const deleteData = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_DATA, id });
  const item = getState().data;
  localStorage.setItem("tableData", item);
};
