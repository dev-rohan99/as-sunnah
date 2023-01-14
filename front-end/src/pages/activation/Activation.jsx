import React from 'react';
import Cookies from "js-cookie";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import createToast from '../../utility/toast';
import { userVerifyByCode } from '../../redux/auth/action';

const Activation = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [code, setCode] = useState("");

    const handleInputChange = (event) => {
        setCode(event.target.value);
    }

    const handleVerifyCancel = () => {
        Cookies.remove("otp");
        navigate('/login');
    }

    const handleVerifyContinue = (event) => {
        if(!code){
            createToast("Set the OTP code!", "warn");
        }else{
            dispatch(userVerifyByCode({
                code : code,
                email : Cookies.remove("otp")
            }, navigate));
        }
    }

    const handleResendActivation = (event) => {
        event.preventDefault();
    }

    const activationEmail = Cookies.get("otp");

    useEffect(() => {
        if(!activationEmail){
            navigate('/login');
        }
    });

  return (
    <div>
        
        <div className="mainContainer bg-[#f1f1f1]">
            <div className="container">
                <div className="w-[100%] h-[100vh] flex items-center justify-center">
                    <div className="w-[550px] rounded-lg bg-[#ffffff] shadow-xl p-5 pt-5 pb-6">
                        <h4 className="text-[25px] font-semibold mb-1">Enter verification code</h4>
                        <p className="text-[17px] font-normal mb-3">Please check your email for a message with your code. Your code is 6 numbers long</p>
                        <div className="flex justify-between items-center">
                            <label className="text-[17px] font-semibold" htmlFor="verify">Enter verification code : </label>
                            <input value={code} onChange={handleInputChange} id="verify" type="number" className="w-[290px] p-3 outline-none border-[3px] border-[#d1d1d1] rounded-lg font-semibold text-[19px] tracking-[10px]" />
                        </div>

                        <div className="flex justify-between items-center mt-7">
                            <a onClick={handleResendActivation} className="hover:underline hover:decoration-solid text-[#D82E38]" href="/">Didn't get the code?</a>

                            <div className="">
                                <Link to={'/login'} onClick={handleVerifyCancel} className="bg-[#d1d1d1] text-[16px] font-semibold text-[#1b1b1b] rounded-md py-2 px-4 active:bg-[#e0e0e0]">Cancel</Link>
                                <button onClick={handleVerifyContinue} className="bg-[#D82E38] text-[16px] font-semibold ml-3 text-[#ffffff] rounded-md py-2 px-4 active:bg-[#ff6e78]">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Activation