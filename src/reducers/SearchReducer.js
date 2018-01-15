import { SET_SEARCH, SET_SEARCH_FAILED } from "../constants/ActionTypes";
const initialState = {
  data: [],
  error: null
};
export default function searchReducer(state = initialState, action) {
  switch (action.payload) {
    case SET_SEARCH:
      return Object.assign({}, ...state, {
        data: action.payload.data
      });
    case SET_SEARCH_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
