import { JOB_LIST, JOB_LIST_FAILED } from "../constants/ActionTypes";
const initialState = {
  data: []
};
export default function jobsReducer(state = initialState, action) {
  switch (action.payload) {
    case JOB_LIST:
      return {
        ...state,
        data: action.payload.data
      };
    case JOB_LIST_FAILED:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
