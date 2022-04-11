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
  const updatedData = getState().data;
  localStorage.setItem("tableData", JSON.stringify(updatedData));
};

// Delete data
export const deleteData = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_DATA, payload: id });
  const item = getState().data;
  if (item.length == 1) {
    localStorage.setItem("tableData", JSON.stringify([]));
  } else localStorage.setItem("tableData", JSON.stringify(item));
};

// Filters

// Company filter
export const companySort = (categories) => (dispatch, getState) => {
  let currentData = localStorage.getItem("tableData")
    ? JSON.parse(localStorage.getItem("tableData"))
    : [];
  if (currentData.length > getState().data) {
    for (let i = 0; i < currentData.length; i++) {
      let newState = currentData[i];
      createData(newState);
    }
  }
  const newData = currentData.filter((data) =>
    categories.includes(data.company)
  );
  dispatch({ type: COMPANY_SORT, payload: newData });
};

// Status filter
export const statusSort = (active, closed) => (dispatch, getState) => {
  let currentData = localStorage.getItem("tableData")
    ? JSON.parse(localStorage.getItem("tableData"))
    : [];
  if (currentData.length > getState().data) {
    for (let i = 0; i < currentData.length; i++) {
      let newState = currentData[i];
      createData(newState);
    }
  }
  let newData;

  if ((active && closed) == true || (!active && !closed) == true) {
    newData = currentData;
  } else {
    if (active)
      newData = currentData.filter((data) => data.status === "active");
    else newData = currentData.filter((data) => data.status === "closed");
  }
  dispatch({ type: STATUS_SORT, payload: newData });
};
