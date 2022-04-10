import {
  ADD_DATA,
  DELETE_DATA,
  COMPANY_SORT,
  STATUS_SORT,
} from "../actions/actionTypes";

const initialState = { data: [] };

export const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA:
      return { ...state, data: { ...state.data, payload } };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((data) => data.id != payload.id),
      };

    case COMPANY_SORT:
      return { ...state, data: payload };
    case STATUS_SORT:
      return { ...state, data: payload };

    default:
      return state;
  }
};
