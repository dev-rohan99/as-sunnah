import React from "react";
import logo from "../../assets/images/logo3.png";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";
import { RiVideoLine, RiBankCardLine } from "react-icons/ri";
import { MdMessage, MdCircleNotifications } from "react-icons/md";

const HeaderOne = () => {



  return (
    <div>
        
        <div className="mainNavWrapper z-20 bg-[#ffffff] shadow-md fixed top-0 left-0 right-0">
            <div className="navContainer pr-[15px] pl-[15px] pt-[5px] pb-[5px] flex justify-between">
            
            <div className="w-[320px] flex items-center">
                <img className="w-[50px] h-[50px] object-cover" src={logo} alt="" />
                <input type="text" className="p-[5px] pl-[20px] outline-none h-[40px] ml-3 w-[250px] rounded-[20px] bg-[#F0F2F5]" placeholder="Search asSunnah" />
            </div>

            <div className="w-[555px] mx-auto">
                <ul className="flex items-center">
                    <li><a className="iconMenuMiddle active" href="#"><AiOutlineHome className="h-[30px] w-[30px]"/></a></li>
                    <li><a className="iconMenuMiddle" href="#"><HiOutlineUsers className="h-[30px] w-[30px]"/></a></li>
                    <li><a className="iconMenuMiddle" href="#"><RiVideoLine className="h-[30px] w-[30px]"/></a></li>
                    <li><a className="iconMenuMiddle" href="#"><HiOutlineUserGroup className="h-[30px] w-[30px]"/></a></li>
                    <li><a className="iconMenuMiddle" href="#"><RiBankCardLine className="h-[30px] w-[30px]"/></a></li>
                </ul>
            </div>
            
            <div className="w-[320px] flex items-center justify-end">
                <ul className="flex items-center">
                <li><a className="iconMenuRight mr-2" href="#"><BsGrid3X3GapFill className="h-[20px] w-[20px]"/></a></li>
                <li><a className="iconMenuRight mr-2" href="#"><MdMessage className="h-[20px] w-[20px]"/></a></li>
                <li><a className="iconMenuRight mr-2" href="#"><MdCircleNotifications className="h-[20px] w-[20px]"/></a></li>
                <li><a className="" href="#"><img src={logo} className="h-[40px] rounded-full w-[40px] object-cover"/></a></li>
                </ul>
            </div>

            </div>
        </div>

    </div>
  )
}

export default HeaderOne;
