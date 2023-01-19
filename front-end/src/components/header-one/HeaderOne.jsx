import React from "react";
import logo from "../../assets/images/logo3.png";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineHome } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";
import { RiVideoLine, RiBankCardLine, RiLogoutBoxRFill } from "react-icons/ri";
import { MdMessage, MdCircleNotifications, MdLiveHelp, MdDarkMode, MdFeedback } from "react-icons/md";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import { useSelector } from "react-redux";

const HeaderOne = () => {

    const { user } = useSelector((state) => state.auth);
    const [userMenu, setUserMenu] = useState(false);

    const handleUserMenu = (event) => {
        event.preventDefault();
        setUserMenu(!userMenu);
    }

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
                    <li className="relative">
                        <a className="" href="/" onClick={handleUserMenu}>
                            <Avatar />
                        </a>

                        {
                            userMenu && <ul className="w-[330px] shadow-lg rounded-md border-t-[5px] border-[#D82E38] rounded-t-none bg-[#F3C0C3] p-3 absolute right-0 top-[53px]">
                            <li><a className="flex p-2 mb-3 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md" href="#"><Avatar /> <h6 className="font-[600] ml-3 text-[#383838] text-[17px]">{user.firstName} {user.surName}</h6></a></li>

                            <li><a className="iconMenuleftList" href="#"><AiFillSetting className="listIcon h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Setting & Privacy</h6></a></li>
                            <li><a className="iconMenuleftList" href="#"><MdLiveHelp className="listIcon2 h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Support & Help</h6></a></li>
                            <li><a className="iconMenuleftList" href="#"><MdDarkMode className="listIcon h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Display</h6></a></li>
                            <li><a className="iconMenuleftList" href="#"><MdFeedback className="listIcon2 h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Feedback</h6></a></li>
                            <li><a className="iconMenuleftList" href="#"><RiLogoutBoxRFill className="listIcon2 h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Log out</h6></a></li>
                        </ul>
                        }
                    </li>
                </ul>
            </div>

            </div>
        </div>

    </div>
  )
}

export default HeaderOne;
