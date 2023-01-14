import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderTwo from "../../components/header-two/HeaderTwo";
import createToast from "../../utility/toast";
import Cookies from "js-cookie";

const FindAccount = () => {

    const navigate = useNavigate();
    const [phoneOrEmail, setPhoneOrEmail] = useState("");

    const handleInputChange = (event) => {
        setPhoneOrEmail(event.target.value);
    }

    const handleFindUserAccount = (event) => {

        event.preventDefault();
        if(!phoneOrEmail){
            createToast("Field is required!", "warn");
        }else{

            axios.post('http://localhost:8080/api/v1/user/find-user-account', {
                phoneOrEmail,
            }).then((res) => {
                createToast("Founded!", "success");
                navigate("/forgot-password");
            }).catch((err) => {
                createToast(err.response.data.message, "error");
                console.log(err);
            });

        }

    }

  return (
    <div>
        
        <HeaderTwo/>

        <div className="mainContainer bg-[#f1f1f1]">
            <div className="container">
                <div className="w-[100%] h-[100vh] flex items-center justify-center">
                    <div className="w-[550px] rounded-lg bg-[#ffffff] shadow-xl p-5 pt-5 pb-6">
                        <h4 className="text-[25px] font-semibold mb-1">Find Your Account</h4>
                        <p className="text-[17px] font-normal mb-3">Please enter your email address or mobile number to search for your account.</p>
                        <div className="">
                            <input name="phoneOrEmail" value={phoneOrEmail} onChange={handleInputChange} id="search" type="text" placeholder="Enter your E-mail or Phone" className="w-[100%] p-3 outline-none border-[3px] border-[#d1d1d1] rounded-lg font-normal text-[17px]" />
                        </div>

                        <div className="flex justify-end items-center mt-7">
                            <div className="">
                                <Link to={'/login'} className="bg-[#d1d1d1] text-[16px] font-semibold text-[#1b1b1b] rounded-md py-3 px-4 active:bg-[#e0e0e0]">Cancel</Link>
                                <a onClick={handleFindUserAccount} href="/" className="bg-[#D82E38] text-[16px] font-semibold ml-3 text-[#ffffff] rounded-md py-3 px-4 active:bg-[#ff6e78]">Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FindAccount;
