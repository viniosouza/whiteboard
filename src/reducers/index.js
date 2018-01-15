import { combineReducers } from "redux";
import companyReducer from "./CompanyReducer";
import registerReducer from "./RegisterReducer";
import searchReducer from "./SearchReducer";

export default combineReducers({
  company: companyReducer,
  search: searchReducer,
  register: searchReducer
});
