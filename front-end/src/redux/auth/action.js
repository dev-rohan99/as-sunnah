import axios from "axios";
import Cookies from "js-cookie";
import createToast from "../../utility/toast.js";
import { USER_FAILED, USER_REQUEST, USER_SUCCESS } from "./actionType.js";


/**
 * user register
 * @param {*} data 
 * @param {*} setRegister 
 * @param {*} setInput 
 * @param {*} event 
 * @param {*} navigate 
 * @returns 
 */

export const userRegister = (data, setRegister, setInput, event, navigate) => async (dispatch) => {

    try{

        dispatch({
            type : USER_REQUEST
        });

        await axios.post("/api/v1/user/register", data).then((res) => {

            dispatch({
                type : USER_SUCCESS,
                payload : res.data.message
            });
            createToast("Your register process successfull! Thank you for joining us.", "success");
            setRegister(false);
            setInput({
                fname : "",
                sname : "",
                phoneOrEmail : "",
                password : "",
                day : "",
                month : "",
                year : "",
                gender : ""
            });
        
            event.target.reset();
            navigate('/activation/account-activation');

        }).catch((err) => {
            createToast(err.response.data.message, "error");
            dispatch({
                type : USER_FAILED,
                payload : err.response.data
            });
        });

    }catch(err){
        createToast(err.response.data.message, "error");
        dispatch({
            type : USER_FAILED,
            payload : err.response.data
        });
    }

}

/**
 * user verify by code
 * @param {*} param0 
 * @param {*} navigate 
 * @returns 
 */

export const userVerifyByCode = ({code, email}, navigate) => async (dispatch) => {

    try{

        await axios.post('/api/v1/user/code-activate', {
            code : code,
            email : email
        }).then((res) => {

            createToast("Account activated!", "success");
            Cookies.remove("otp")
            navigate('/login');

        }).catch(err => {
            createToast(err.response.data.message, "error")
        });

    }catch(err){
        createToast(err.response.data.message, "error");
    }

}

/**
 * resend activation
 * @param {*} emailOrPhone 
 * @param {*} navigate 
 * @returns 
 */

export const resendActivation = (emailOrPhone, navigate) => async (dispatch) => {

    try{
        await axios.post("/api/v1/user/resend-activation", {emailOrPhone}).then(res => {
            createToast(res.data.message, "success");
            navigate("/activation/account-activation");
        }).catch(err => {
            createToast(err.response.data.message, "error");
        });
    }catch(err){
        createToast(err.response.data.message, "error")
    }

}

/**
 * check password reset otp action
 * @param {*} data 
 * @param {*} navigate 
 * @returns 
 */

export const checkPasswordResetOTPAction = (data, navigate) => async (dispatch) => {

    try{
        await axios.post("/api/v1/user/check-password-reset-otp", {
            phoneOrEmail : data.phoneOrEmail,
            code : data.code
        }).then(res => {
            createToast(res.data.message, "success");
            navigate("/change-password");
        }).catch(err => {
            createToast(err.response.data.message, "error");
            console.log(err);
        });
    }catch(err){
        createToast(err.response.data.message, "error")
    }

}

/**
 * change password
 * @param {*} data 
 * @param {*} navigate 
 * @returns 
 */

export const changePassword = (data, navigate) => async (dispatch) => {

    try{
        await axios.post("/api/v1/user/password-reset", {
            id : data.id,
            code : data.code,
            password : data.password
        }).then(res => {
            createToast(res.data.message, "success");
            navigate("/login");
        }).catch(err => {
            createToast(err.response.data.message, "error");
            console.log(err);
        });
    }catch(err){
        createToast(err.response.data.message, "error")
    }

}
