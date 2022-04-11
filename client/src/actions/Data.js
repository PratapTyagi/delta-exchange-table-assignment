import {
  ADD_DATA,
  DELETE_DATA,
  COMPANY_SORT,
  STATUS_SORT,
} from "./actionTypes";

// Create data
export const createData = (data) => (dispatch, getState) => {
  let lastIndex = getState().data;
  lastIndex = lastIndex.length
    ? parseInt(lastIndex.slice(-1)[0].id) + 1 + ""
    : 0;
  const newData = { id: lastIndex, ...data };

  dispatch({ type: ADD_DATA, payload: newData });
  let updatedData = getState().data;
  updatedData = updatedData.filter((d) => d.id != "0");
  localStorage.setItem("tableData", JSON.stringify(updatedData));
};

// Read data
export const getData = () => (dispatch, getState) => {
  return getState.data;
  // if (getState.data) {
  //   ret
  // }
  // return localStorage.getItem("tableData")
  //   ? JSON.parse(localStorage.getItem("tableData"))
  //   : null;
};

// Delete data
export const deleteData = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_DATA, payload: id });
  const item = getState().data;
  if (item.length == 1) {
    localStorage.setItem("tableData", JSON.stringify([]));
  } else localStorage.setItem("tableData", JSON.stringify(item));
};

// Company filter
export const companySort = (categories) => (dispatch, getState) => {
  const currentData = getState().data;
  const newData = currentData.filter((data) =>
    categories.includes(data.company)
  );
  dispatch({ type: COMPANY_SORT, payload: newData });
};

// Status filter
export const statusSort = (isActive) => (dispatch, getState) => {
  const currentData = getState().data;
  const newData = currentData.filter((data) =>
    isActive ? data.status === "Active" : data.status === "Closed"
  );
  dispatch({ type: STATUS_SORT, payload: newData });
};
