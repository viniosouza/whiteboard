import { combineReducers } from "redux";
import companyReducer from "./CompanyReducer";
import registerReducer from "./RegisterReducer";
import searchReducer from "./SearchReducer";
import JobsReducer from "./JobsReducer";

export default combineReducers({
  company: companyReducer,
  search: searchReducer,
  register: searchReducer,
  jobs: JobsReducer
});
