import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { FaHouseUser, FaUserPlus, FaUsers } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { RiUserSharedFill } from 'react-icons/ri';
import HeaderOne from '../../components/header-one/HeaderOne';


const Friends = () => {


  return (
    <>
    
        <HeaderOne/>

        <div className="bg-[#F0F2F5] pt-[100px] pb-[60px]">
            <div className="relative">
                <div className="w-[20%] fixed left-0 top-0 bottom-0 h-[100vh] bg-[#fff] shadow-lg p-2">

                    <div className="pt-[5rem] flex items-center justify-between">
                        <h4 className="font-[600] text-[#383838] text-[25px]">Friends</h4>
                        <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center hover:bg-[#c9c9c9] bg-[#ddd]">
                            <AiFillSetting className="w-[25px] h-[25px]"/>
                        </a>
                    </div>

                    <ul className="mt-4">
                        <li><a className="iconMenuleftList2" href="#"><HiUsers className="listIcon h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">Home</h6></a></li>
                        <li><a className="iconMenuleftList2" href="#"><RiUserSharedFill className="listIcon h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">Friend Requiest</h6></a></li>
                        <li><a className="iconMenuleftList2" href="#"><FaUserPlus className="listIcon2 h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">Suggestions</h6></a></li>
                        <li><a className="iconMenuleftList2" href="#"><FaHouseUser className="listIcon h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">All Friends</h6></a></li>
                    </ul>
                </div>
        
                <div className="w-[77%] ml-auto pr-5">

                    <div className="pb-5 border-b-[3px] border-[#ddd]">
                        <div className="flex justify-between items-center">
                            <h4 className="font-[600] text-[#383838] text-[21px] mb-3">Friend Requiest</h4>

                            <a className="px-4 py-1 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444]" href="#">See all</a>
                        </div>

                        <div className="grid grid-cols-5 gap-3 mt-3">
                            
                            <div className="w-[210px] rounded-md shadow-lg bg-[#fff] p-2">
                                <img className="w-[100%] h-[200px] object-cover rounded-md" src="https://islamicanews.com/files/2017/09/in_noncharismaticimam.jpg" alt="friendImg" />
                                <div className="">
                                    <h4 className="font-[600] text-[#383838] text-[17px] mt-3">Abdullah</h4>

                                    <div className="flex justify-start items-center mt-1 mb-1">
                                        <img className="w-[20px] h-[20px] border-[1px] border-[#fff] rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                                        <img className="w-[20px] h-[20px] border-[1px] border-[#fff] rounded-full object-cover ml-[-4px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                                        <span className="font-normal text-[gray] text-[14px] ml-2">4 mutual friends</span>
                                    </div>

                                    <a href="/" className="px-5 w-[100%] block py-2 font-semibold rounded-md text-[#fff] bg-[#D82E38] text-center text-[15px] mt-2">Confirm</a>
                                    <a href="/" className="px-5 w-[100%] block py-2 font-semibold rounded-md text-[#fff] bg-[#444444] text-center text-[15px] mt-2">Delete</a>
                                </div>
                            </div>

                        </div>

                        <a href="/" className="mt-5 mb-3 px-4 py-2 font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] hover:bg-[#d82e3969] flex justify-center items-center">See more</a>
                    </div>

                    <div className="mt-5">
                        <div className="flex justify-between items-center">
                            <h4 className="font-[600] text-[#383838] text-[21px] mb-3">People you may know</h4>

                            <a className="px-4 py-1 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444]" href="#">See all</a>
                        </div>

                        <div className="grid grid-cols-5 gap-3 mt-3">
                            
                            <div className="w-[210px] rounded-md shadow-lg bg-[#fff] p-2">
                                <img className="w-[100%] h-[200px] object-cover rounded-md" src="https://islamicanews.com/files/2017/09/in_noncharismaticimam.jpg" alt="friendImg" />
                                <div className="">
                                    <h4 className="font-[600] text-[#383838] text-[17px] mt-3">Abdullah</h4>

                                    <div className="flex justify-start items-center mt-1 mb-1">
                                        <img className="w-[20px] h-[20px] border-[1px] border-[#fff] rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                                        <img className="w-[20px] h-[20px] border-[1px] border-[#fff] rounded-full object-cover ml-[-4px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                                        <span className="font-normal text-[gray] text-[14px] ml-2">4 mutual friends</span>
                                    </div>

                                    <a href="/" className="px-5 w-[100%] block py-2 font-semibold rounded-md text-[#fff] bg-[#D82E38] text-center text-[15px] mt-2">Add Friend</a>
                                    <a href="/" className="px-5 w-[100%] block py-2 font-semibold rounded-md text-[#fff] bg-[#444444] text-center text-[15px] mt-2">Delete</a>
                                </div>
                            </div>

                        </div>

                        <a href="/" className="mt-5 px-4 py-2 font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] hover:bg-[#d82e3969] flex justify-center items-center">See more</a>
                    </div>

                </div>
            </div>
        </div>
    
    </>
  )
}

export default Friends;
