import axios from "axios";
import Cookies from "js-cookie";
import createToast from "../../utility/toast.js";
import { LOADER_START } from "../loader/loaderType.js";
import { LOGGEDIN_USER_FAILED, LOGGEDIN_USER_REQUEST, LOGGEDIN_USER_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, USER_LOGOUT, USER_PROFILE_UPDATE } from "./actionType.js";


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
            type : REGISTER_REQUEST
        });

        await axios.post("/api/v1/user/register", data).then((res) => {

            dispatch({
                type : REGISTER_SUCCESS,
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
                type : REGISTER_FAILED,
                payload : err.response.data
            });
        });

    }catch(err){
        createToast(err.response.data.message, "error");
        dispatch({
            type : REGISTER_FAILED,
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
        });
    }catch(err){
        createToast(err.response.data.message, "error")
    }

}

/**
 * user login
 * @param {*} data 
 * @param {*} navigate 
 * @returns 
 */

export const userLogin = (data, navigate) => async (dispatch) => {

    try{

        dispatch({
            type : LOGIN_REQUEST
        });

        await axios.post("/api/v1/user/login", {
            phoneOrEmail : data.phoneOrEmail,
            password : data.password
        }).then(res => {
            dispatch({
                type : LOGIN_SUCCESS,
                payload : res.data.user
            });
            dispatch({
                type : LOADER_START
            });
            createToast(res.data.message, "success");
            navigate("/");
        }).catch(err => {
            dispatch({
                type : LOGIN_FAILED
            });
            createToast(err.response.data.message, "error");
        });
    }catch(err){
        createToast(err.response.data.message, "error")
    }

}

/**
 * access logged in user
 * @param {*} data 
 * @param {*} navigate 
 * @returns 
 */

export const accessLoggedInUser = (token) => async (dispatch) => {

    try{

        // dispatch({
        //     type : LOGGEDIN_USER_REQUEST
        // });

        await axios.get("/api/v1/user/me", {
            headers : {
                Authorization : `Bearer ${token}`
            },
        }).then(res => {

            dispatch({
                type : LOGGEDIN_USER_SUCCESS,
                payload : res.data.user
            });
            dispatch({
                type : LOADER_START
            });
            
        }).catch(err => {
            dispatch({
                type : LOGGEDIN_USER_FAILED
            });
            dispatch(userLogout());
            createToast(err.response.data.message, "error");
        });
    }catch(err){
        dispatch(userLogout());
        createToast(err.response.data.message, "error");
    }

}

/**
 * user logout
 * @returns 
 */

export const userLogout = () => (dispatch) => {

    dispatch({
        type : LOADER_START
    });
    Cookies.remove("authToken");
    dispatch({
        type : USER_LOGOUT
    });

}

/**
 * user profile update
 * @param {*} id 
 * @param {*} data 
 * @param {*} setShowBio 
 * @returns 
 */

export const userProfileUpdate = (id, data, setShowBio) => async (dispatch) => {

    try{

        await axios.put(`/api/v1/user/profile-update/${id}`, data).then((res) => {

            dispatch({
                type : USER_PROFILE_UPDATE,
                payload : res.data.user
            });
            setShowBio(false);

        }).catch((err) => {
            createToast(err.response.data.message, "error");
        })

    }catch(err){
        createToast(err.response.data.message, "error");
    }

}

