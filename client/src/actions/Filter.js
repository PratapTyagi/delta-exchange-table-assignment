import { COMPANY_SORT, STATUS_SORT } from "./actionTypes";

export const companySort = (categories) => (dispatch, getState) => {
  const currentData = getState().data;
  const newData = currentData.filter((data) =>
    categories.includes(data.company)
  );
  dispatch({ type: COMPANY_SORT, payload: newData });
};

export const statusSort = (isActive) => (dispatch, getState) => {
  const currentData = getState().data;
  const newData = currentData.filter((data) =>
    isActive ? data.status === "Active" : data.status === "Closed"
  );
  dispatch({ type: STATUS_SORT, payload: newData });
};
