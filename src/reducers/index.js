import { combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import registerReducer from "./RegisterReducer";
import searchReducer from "./SearchReducer";

export default combineReducers({
    profile: profileReducer,
    search: searchReducer,
    register: searchReducer

});
