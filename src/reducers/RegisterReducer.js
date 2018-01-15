import {
  REGISTER_COMPANY,
  REGISTER_COMPANY_FAILED
} from "../constants/ActionTypes";

const initialState = {
  error: null
};
export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_COMPANY:
      return {
        ...state
      };
    case REGISTER_COMPANY_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
