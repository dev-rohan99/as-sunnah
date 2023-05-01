import { CANCEL_FRIEND_REQ_FAILED, CANCEL_FRIEND_REQ_REQ, CANCEL_FRIEND_REQ_SUCCESS, CONFIRM_FRIEND_REQ_FAILED, CONFIRM_FRIEND_REQ_REQ, CONFIRM_FRIEND_REQ_SUCCESS, FRIEND_REQ_FAILED, FRIEND_REQ_REQ, FRIEND_REQ_SUCCESS, GET_USERS_FAILED, GET_USERS_REQ, GET_USERS_SUCCESS, LOGGEDIN_USER_FAILED, LOGGEDIN_USER_REQUEST, LOGGEDIN_USER_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, USER_LOGOUT, USER_PROFILE_PHOTO_UPDATE, USER_PROFILE_UPDATE, } from "./actionType.js";
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

        case USER_PROFILE_PHOTO_UPDATE:
            return {
                ...state,
                user : {
                    ...state.user,
                    ...payload
                }
            };

        case GET_USERS_REQ:
            return {
                ...state,
                loading : true
            };

        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading : false,
                users : payload
            };

        case GET_USERS_FAILED:
            return {
                ...state,
                loading : false,
                users : []
            };

        case FRIEND_REQ_REQ:
            return {
                ...state,
                loading : true
            };

        case FRIEND_REQ_SUCCESS:
            return {
                ...state,
                loading : false,
                user : payload
            };

        case FRIEND_REQ_FAILED:
            return {
                ...state,
                loading : false,
                users : []
            };

        case CONFIRM_FRIEND_REQ_REQ:
            return {
                ...state,
                loading : true
            };

        case CONFIRM_FRIEND_REQ_SUCCESS:
            return {
                ...state,
                loading : false,
                user : payload
            };

        case CONFIRM_FRIEND_REQ_FAILED:
            return {
                ...state,
                loading : false,
                users : []
            };

        case CANCEL_FRIEND_REQ_REQ:
            return {
                ...state,
                loading : true
            };

        case CANCEL_FRIEND_REQ_SUCCESS:
            return {
                ...state,
                loading : false,
                user : payload
            };

        case CANCEL_FRIEND_REQ_FAILED:
            return {
                ...state,
                loading : false,
                users : []
            };

        default:
            return state;

    }

}

export default authReducer;
