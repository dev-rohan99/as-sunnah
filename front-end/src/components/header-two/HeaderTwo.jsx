import React from 'react';
import logo from "../../assets/images/logo3.png";

const HeaderTwo = () => {


  return (
    <div>
        
        <div className="mainNavWrapper z-20 bg-[#ffffff] shadow-md fixed top-0 left-0 right-0">
            <div className="navContainer pr-[15px] pl-[15px] pt-[5px] pb-[5px] flex justify-between">
            
                <div className="w-[320px] flex items-center">
                    <img className="w-[50px] h-[50px] object-cover" src={logo} alt="" />
                    <input type="text" className="p-[5px] pl-[20px] outline-none h-[40px] ml-3 w-[250px] rounded-[20px] bg-[#F0F2F5]" placeholder="Search asSunnah" />
                </div>
                
                <div className="w-[650px] py-1 flex items-center justify-end">
                    <input type="text" placeholder="Email address or phone number" className="w-[100%] p-2 outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38] mr-3" />

                    <input type="password" placeholder="Password" className="w-[100%] p-2 outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38] mr-3" />

                    <button type="submit" className="p-2 outline-none w-[200px] text-[17px] text-[#ffffff] font-bold  bg-[#D82E38] hover:bg-[#e72c39] rounded-md">Log in</button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default HeaderTwo;
