import { LOGGEDIN_USER_FAILED, LOGGEDIN_USER_REQUEST, LOGGEDIN_USER_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, USER_LOGOUT, USER_PROFILE_UPDATE, } from "./actionType.js";
import initialState from "./initialState.js";


const authReducer = (state = initialState, {type, payload}) => {

    switch(type){

        case REGISTER_REQUEST:
            return {
                ...state,
                loading : true
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading : false,
                message : payload
            };

        case REGISTER_FAILED:
            return {
                ...state,
                loading : false,
                message : payload
            };

        case LOGIN_REQUEST:
            return {
                ...state,
                loading : true,
                message : payload
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading : false,
                loginState : true,
                user : payload
            };

        case LOGIN_FAILED:
            return {
                ...state,
                loading : false,
                user : null
            };

        case LOGGEDIN_USER_REQUEST:
            return {
                ...state,
                loading : true,
                loginState : true
            };

        case LOGGEDIN_USER_SUCCESS:
            return {
                ...state,
                loading : false,
                user : payload,
                loginState : true
            };

        case LOGGEDIN_USER_FAILED:
            return {
                ...state,
                loading : false,
                loginState : false,
                user : null
            };

        case USER_LOGOUT:
            return {
                ...state,
                loading : false,
                loginState : false,
                user : null
            };

        case USER_PROFILE_UPDATE:
            return {
                ...state,
                loading : false,
                loginState : true,
                user : payload
            };

        default:
            return state;

    }

}

export default authReducer;
