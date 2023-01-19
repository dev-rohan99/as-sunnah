import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import loaderReducer from "./loader/loaderReducer";
import toastReducer from "./toast/toastReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    toast : toastReducer,
    loader : loaderReducer
});

export default rootReducer;
