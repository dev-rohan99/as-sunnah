import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderTwo from '../../components/header-two/HeaderTwo';
import { hidePhoneOrEmail } from '../../utility/helper.js';
import createToast from '../../utility/toast';

const ForgotPassword = () => {

    const navigate = useNavigate();
    const [findUser, setFindUser] = useState({
        name : "",
        phone : "",
        email : "",
        avatar : ""
    });

    const handleUserCancel = (event) => {
        event.preventDefault();
        Cookies.remove("findUser");
        navigate("/login");
    }

    const handleUserForgotPassContinue = async (event) => {

        event.preventDefault();
        await axios.post("/api/v1/user/send-user-identification-otp", {emailOrPhone : findUser.phone ?? findUser.email}).then(res => {

            navigate("/activation/password-reset");
            createToast(res.data.message, "success");

        }).catch(err => {
            createToast(err.response.data.message, "error")
        });

    }

    useEffect(() => {

        const userData = JSON.parse(Cookies.get("findUser")) ?? null;

        if(userData){
            setFindUser({
                name : userData.name,
                phone : userData.phone ?? null,
                email : userData.email ?? null,
                avatar : userData.avatar
            });
        } 

    }, []);


  return (
    <div>

        <HeaderTwo/>
        
        <div className="mainContainer bg-[#f1f1f1]">
            <div className="container">
                <div className="w-[100%] h-[100vh] flex items-center justify-center">
                    <div className="w-[500px] flex justify-center flex-col rounded-lg bg-[#ffffff] shadow-xl p-5 py-7">
                        <img className="w-[100px] mx-auto h-[100px] mb-4 object-cover rounded-full" src={ findUser.avatar ? findUser.avatar : "https://cdn-icons-png.flaticon.com/512/219/219988.png" } alt="" />
                        <h3 className="text-[30px] text-[#2b2b2b] font-semibold text-center">{ findUser.name ? findUser.name : "User" }</h3>
                        {
                            findUser.phone && <p className="text-[14px] text-[#1f1f1f] font-semibold text-center">Phone : {hidePhoneOrEmail(findUser.phone)}</p>
                        }

                        {
                            findUser.email && <p className="text-[14px] text-[#1f1f1f] font-semibold text-center">Email : {hidePhoneOrEmail(findUser.email)}</p>
                        }
                        <p className="text-[14px] text-[gray] font-normal text-center">To reset your account password, please continue</p>

                        <div className="flex justify-center items-center mt-7">
                            <div className="mb-3">
                                <a href="/" onClick={handleUserCancel} className="bg-[#d1d1d1] text-[16px] font-semibold text-[#1b1b1b] rounded-md py-3 px-4 active:bg-[#e0e0e0]">Not you?</a>
                                <a onClick={handleUserForgotPassContinue} href="/" className="bg-[#D82E38] text-[16px] font-semibold ml-3 text-[#ffffff] rounded-md py-3 px-4 active:bg-[#ff6e78]">Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ForgotPassword;
