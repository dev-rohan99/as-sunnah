import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import toastReducer from "./toast/toastReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    toast : toastReducer
});

export default rootReducer;
