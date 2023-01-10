import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTwo from '../../components/header-two/HeaderTwo';

const ForgotPassword = () => {


  return (
    <div>

        <HeaderTwo/>
        
        <div className="mainContainer bg-[#f1f1f1]">
            <div className="container">
                <div className="w-[100%] h-[100vh] flex items-center justify-center">
                    <div className="w-[350px] flex justify-center flex-col rounded-lg bg-[#ffffff] shadow-xl p-5 pt-5 pb-6">
                        <img className="w-[100px] mx-auto h-[100px] object-cover rounded-full" src="https://i.pinimg.com/736x/25/92/a8/2592a84a4d7c3100afad0e6c50a7ea21--baby-boy-pictures-asian-kids.jpg" alt="" />
                        <h3 className="text-[30px] text-[#2b2b2b] font-semibold text-center">Rohan Mostafa</h3>
                        <p className="text-[14px] text-[gray] font-normal text-center">To reset your account password, please continue</p>

                        <div className="flex justify-center items-center mt-7">
                            <div className="">
                                <Link to={'/login'} className="bg-[#d1d1d1] text-[16px] font-semibold text-[#1b1b1b] rounded-md py-3 px-4 active:bg-[#e0e0e0]">Not you?</Link>
                                <a href="#" className="bg-[#D82E38] text-[16px] font-semibold ml-3 text-[#ffffff] rounded-md py-3 px-4 active:bg-[#ff6e78]">Continue</a>
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
