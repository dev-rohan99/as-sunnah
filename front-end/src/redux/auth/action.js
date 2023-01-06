import axios from "axios";
import createToast from "../../utility/toast.js";
import { USER_FAILED, USER_REQUEST, USER_SUCCESS } from "./actionType.js";

const userRegister = (data, setRegister, setInput, event, navigate) => async (dispatch) => {

    try{

        dispatch({
            type : USER_REQUEST
        });

        await axios.post("http://localhost:8080/api/v1/user/register", data).then((res) => {

            dispatch({
                type : USER_SUCCESS,
                payload : res.data.message
            });
            createToast("Your register process successfull! Thank you for joining us.", "success");
            setRegister(false);
            setInput({
                fname : "",
                sname : "",
                emailorphone : "",
                password : "",
                day : "",
                month : "",
                year : "",
                gender : ""
              });
        
            event.target.reset();
            navigate('/activation');

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

export default userRegister;
