import {
  ADD_DATA,
  DELETE_DATA,
  COMPANY_SORT,
  STATUS_SORT,
} from "../actions/actionTypes";

export const dataReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA:
      return [...state, payload];
    case DELETE_DATA:
      return [...state.filter((data) => data.id != payload)];

    case COMPANY_SORT:
      return [...payload];
    case STATUS_SORT:
      return [...payload];

    default:
      return state;
  }
};
