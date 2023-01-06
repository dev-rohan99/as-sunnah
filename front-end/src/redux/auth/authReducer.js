import { USER_FAILED, USER_REQUEST, USER_SUCCESS } from "./actionType.js";
import initialState from "./initialState.js";


const authReducer = (state = initialState, {type, payload}) => {

    switch(type){

        case USER_REQUEST:
            return {
                ...state,
                loading : true
            };

        case USER_SUCCESS:
            return {
                ...state,
                loading : false,
                message : payload
            };

        case USER_FAILED:
            return {
                ...state,
                loading : false,
                message : payload
            };

        default:
            return state;

    }

}

export default authReducer;
