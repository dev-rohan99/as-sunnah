import axios from "axios";
import Cookies from "js-cookie";
import createToast from "../../utility/toast.js";
import { LOADER_START } from "../loader/loaderType.js";
import { CANCEL_FRIEND_REQ_FAILED, CANCEL_FRIEND_REQ_REQ, CANCEL_FRIEND_REQ_SUCCESS, CONFIRM_FRIEND_REQ_FAILED, CONFIRM_FRIEND_REQ_REQ, CONFIRM_FRIEND_REQ_SUCCESS, FRIEND_REQ_FAILED, FRIEND_REQ_REQ, FRIEND_REQ_SUCCESS, GET_USERS_FAILED, GET_USERS_REQ, GET_USERS_SUCCESS, LOGGEDIN_USER_FAILED, LOGGEDIN_USER_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, USER_LOGOUT, USER_PROFILE_PHOTO_UPDATE, USER_PROFILE_UPDATE } from "./actionType.js";


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

        await axios.post("https://as-sunnah.onrender.com/api/v1/user/register", data).then((res) => {

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

        await axios.post('https://as-sunnah.onrender.com/api/v1/user/code-activate', {
            code : code,
            email : email
        }).then((res) => {

            createToast("Account activated!", "success");
            Cookies.remove("otp");
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
        await axios.post("https://as-sunnah.onrender.com/api/v1/user/resend-activation", {emailOrPhone}).then(res => {
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
        await axios.post("https://as-sunnah.onrender.com/api/v1/user/check-password-reset-otp", {
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
        await axios.post("https://as-sunnah.onrender.com/api/v1/user/password-reset", {
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

        await axios.post("https://as-sunnah.onrender.com/api/v1/user/login", {
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
            navigate(-1);
        }).catch(err => {
            dispatch({
                type : LOGIN_FAILED
            });
            createToast(err.response.data.message, "error");
        });
    }catch(err){
        dispatch({
            type : LOGIN_FAILED
        });
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

        await axios.get("https://as-sunnah.onrender.com/api/v1/user/me", {
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

        await axios.put(`https://as-sunnah.onrender.com/api/v1/user/profile-update/${id}`, data).then((res) => {

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

/**
 * user profile photo update
 * @param {*} id 
 * @param {*} data 
 * @param {*} setShowBio 
 * @returns 
 */

export const userProfilePhotoUpdate = (id, data, setProfileEditorModal) => async (dispatch) => {
    
    try{

        await axios.put(`https://as-sunnah.onrender.com/api/v1/user/profile-photo/${id}`, data).then((res) => {

            dispatch({
                type : USER_PROFILE_PHOTO_UPDATE,
                payload : {
                    avatar : res.data.filename
                }
            });
            setProfileEditorModal(false);
            console.log(res.data);
            createToast("Profile photo updated!", "success");

        }).catch((err) => {
            createToast(err.response.data.message, "error");
        })

    }catch(err){
        createToast(err.response.data.message, "error");
    }

}

/**
 * user featured photo update
 * @param {*} id 
 * @param {*} data 
 * @param {*} setShowBio 
 * @returns 
 */

export const userFeaturedPhotoUpdate = (id, data, setFeaturedPopup) => async (dispatch) => {

    try{

        await axios.put(`https://as-sunnah.onrender.com/api/v1/user/featured/${id}`, data).then((res) => {

            dispatch({
                type : USER_PROFILE_UPDATE,
                payload : res.data.user
            });
            createToast("New featured photo added successfull!", "success");
            setFeaturedPopup(false);

        }).catch((err) => {
            createToast(err.response.data.message, "error");
        })

    }catch(err){
        createToast(err.response.data.message, "error");
    }

}

/**
 * get user all data
 * @param {*} id 
 * @param {*} data 
 * @param {*} setShowBio 
 * @returns 
 */

export const getAllUserData = (id) => async (dispatch) => {
    
    try{

        dispatch({
            type : GET_USERS_REQ
        });

        await axios.get(`https://as-sunnah.onrender.com/api/v1/user/users/${id}`).then((res) => {

            dispatch({
                type : GET_USERS_SUCCESS,
                payload : res.data.users
            });

        }).catch((err) => {
            dispatch({
                type : GET_USERS_FAILED
            });
            createToast(err.response.data.message, "error");
        })

    }catch(err){
        dispatch({
            type : GET_USERS_FAILED
        });
        createToast(err.response.data.message, "error");
    }

}


/**
 * add friend request
 * @param {*} id 
 * @param {*} data 
 * @param {*} setShowBio 
 * @returns 
 */

export const friendRequstSenderAction = (requesterId, receiverId) => async (dispatch) => {
    
    try{

        dispatch({
            type : FRIEND_REQ_REQ
        });

        await axios.get(`https://as-sunnah.onrender.com/api/v1/user/add-friend/${requesterId}/${receiverId}`).then((res) => {

            dispatch({
                type : FRIEND_REQ_SUCCESS,
                payload : res.data.user
            });
            
            createToast("Friend request sended!", "success");
            

        }).catch((err) => {
            dispatch({
                type : FRIEND_REQ_FAILED
            });
            createToast(err.response.data.message, "error");
        })

    }catch(err){
        dispatch({
            type : FRIEND_REQ_FAILED
        });
        createToast(err.response.data.message, "error");
    }

}

/**
 * confirm friend request
 * @param {*} id 
 * @param {*} data 
 * @param {*} setShowBio 
 * @returns 
 */

export const confirmFriendRequstAction = (receiverId, requesterId) => async (dispatch) => {
    
    try{

        dispatch({
            type : CONFIRM_FRIEND_REQ_REQ
        });

        await axios.get(`https://as-sunnah.onrender.com/api/v1/user/confirm-friend-request/${receiverId}/${requesterId}`).then((res) => {

            dispatch({
                type : CONFIRM_FRIEND_REQ_SUCCESS,
                payload : res.data.user
            });

            createToast("Friend request accepted!", "success");
            

        }).catch((err) => {
            dispatch({
                type : CONFIRM_FRIEND_REQ_FAILED
            });
            createToast(err.response.data.message, "error");
        })

    }catch(err){
        dispatch({
            type : CONFIRM_FRIEND_REQ_FAILED
        });
        createToast(err.response.data.message, "error");
    }

}

/**
 * cancel friend request
 * @param {*} id 
 * @param {*} data 
 * @param {*} setShowBio 
 * @returns 
 */

export const cancelFriendRequstAction = (requesterId, receiverId) => async (dispatch) => {
    
    try{

        dispatch({
            type : CANCEL_FRIEND_REQ_REQ
        });

        await axios.get(`https://as-sunnah.onrender.com/api/v1/user/cancel-friend-request/${requesterId}/${receiverId}`).then((res) => {

            dispatch({
                type : CANCEL_FRIEND_REQ_SUCCESS,
                payload : res.data.user
            });

            createToast("Friend request canceled!", "success");

        }).catch((err) => {
            dispatch({
                type : CANCEL_FRIEND_REQ_FAILED
            });
            createToast(err.response.data.message, "error");
        })

    }catch(err){
        dispatch({
            type : CANCEL_FRIEND_REQ_FAILED
        });
        createToast(err.response.data.message, "error");
    }

}

