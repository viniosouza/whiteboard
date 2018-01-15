import {
  COMPANY_DETAILS,
  COMPANY_DETAILS_FAILED
} from "../constants/ActionTypes";
const initialState = {
  error: null,
  data: {}
};
export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case COMPANY_DETAILS:
      return {
        ...state,
        data: action.payload.data
      };
    case COMPANY_DETAILS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
