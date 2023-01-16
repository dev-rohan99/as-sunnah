import Cookies from 'js-cookie';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import HeaderTwo from '../../components/header-two/HeaderTwo';
import { changePassword } from '../../redux/auth/action';
import createToast from '../../utility/toast';

const ChangePassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");

    const handlePasswordChange = (event) => {

        event.preventDefault();
        if(!password){
            createToast("Password field is required!");
        }else{

            dispatch(changePassword({
                id : Cookies.get("changePassID"),
                code : Cookies.get("changePassCode"),
                password
            }, navigate));

        }

    }


  return (
    <div>
        
        <HeaderTwo/>

        <div className="mainContainer bg-[#f1f1f1]">
            <div className="container">
                <div className="w-[100%] h-[100vh] flex items-center justify-center">
                    <div className="w-[550px] rounded-lg bg-[#ffffff] shadow-xl p-5 pt-5 pb-6">
                        <h4 className="text-[25px] font-semibold mb-1">Choose your new password</h4>
                        <p className="text-[17px] font-normal mb-3">Please enter your new password.</p>
                        <div className="">
                            <input name="password" value={password} onChange={(event) => setPassword(event.target.value)} id="search" type="password" placeholder="Enter your new password" className="w-[100%] p-3 outline-none border-[3px] border-[#d1d1d1] rounded-lg font-normal text-[17px]" />
                        </div>

                        <div className="flex justify-end items-center mt-7">
                            <div className="">
                                <Link to={'/login'} className="bg-[#d1d1d1] text-[16px] font-semibold text-[#1b1b1b] rounded-md py-3 px-4 active:bg-[#e0e0e0]">Skip</Link>
                                <a onClick={handlePasswordChange} href="/" className="bg-[#D82E38] text-[16px] font-semibold ml-3 text-[#ffffff] rounded-md py-3 px-4 active:bg-[#ff6e78]">Change password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChangePassword;
