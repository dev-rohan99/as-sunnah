import React from 'react'
import logo from "../../assets/images/logo3.png";
import { AiFillVideoCamera } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const HomeRightBar = () => {

    const { user } = useSelector((state) => state.auth);

  return (
    
    <div className="rightListBar z-10 sticky top-0 w-[320px] h-[100vh] overflow-hidden overflow-y-scroll">
                  
        <div className="mr-3 mt-[5.5rem] flex justify-between items-center">
            <h5 className="font-bold text-[#383838]">Contacts</h5>

            <div className="flex justify-end">
                <a href="#" className="contactIcon"><AiFillVideoCamera className="w-[15px] h-[15px]"/></a>
                <a href="#" className="contactIcon"><BiSearchAlt2 className="w-[15px] h-[15px]"/></a>
                <a href="#" className="contactIcon"><BsThreeDots className="w-[15px] h-[15px]"/></a>
            </div>
        </div>

        <ul className="mt-2 pb-2 mb-3 border-b-[3px] border-[#d1d1d1]">
            <li><a className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md mb-3" href="#"><img src={logo} className="h-[30px] rounded-full w-[30px] object-cover"/> <h6 className="font-semibold ml-3 text-[#383838] text-[16px]">Ashraful Haque</h6></a></li>
        </ul>

        <h5 className="font-bold text-[#383838]">Group Conversations</h5>

        <ul className="mt-2 mb-3">
            <li><a className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md mb-3" href="#"><img src={logo} className="h-[30px] rounded-full w-[30px] object-cover"/> <h6 className="font-semibold ml-3 text-[#383838] text-[16px]">Developers</h6></a></li>
        </ul>

    </div>
    
  )
}

export default HomeRightBar;
