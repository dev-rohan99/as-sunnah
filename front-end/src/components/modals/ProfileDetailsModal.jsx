import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';


const ProfileDetailsModal = ({setDetailsModal}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/about-profile");
    }

  return (
    <>
    
        <div className="relative z-50">
            <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#ffffffbb] fixed left-0 right-0 top-0 text-[#2b2b2b]">
                <div className="w-[700px] rounded-lg bg-[#ffffff] shadow-xl py-5">

                    <div className="flex justify-between items-center border-b-[3px] px-7 border-[#ddd] pb-2">
                        <h3 className="text-[25px] font-bold">Edit details</h3>
                        <a onClick={(e) => {e.preventDefault(); setDetailsModal(false);}} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[#ccc]">
                            <RxCross1 className="h-[20px] w-[20px]"/>
                        </a>
                    </div>

                    <div className="h-[400px] overflow-auto px-7">
                        <div className="mt-4">
                            <h3 className="text-[18px] font-bold">Customise your Intro</h3>
                            <h3 className="text-[15px] font-normal text-[gray]">Details you select will be public.</h3>
                        </div>

                        <div className="mt-4 mb-3">
                            <h3 className="text-[18px] font-bold">Works</h3>
                            <div onClick={handleNavigate} className="flex justify-start items-center mt-3 hover:underline">
                                <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                <Link to={"/about-profile"} className="text-[#D82E38] text-[15px] font-semibold ml-5">Add a workspace</Link>
                            </div>
                        </div>

                        <div className="mt-4 mb-3">
                            <h3 className="text-[18px] font-bold">Education</h3>
                            <div className="flex justify-start items-center mt-3 hover:underline">
                                <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add secondary school</a>
                            </div>

                            <div className="flex justify-start items-center mt-3 hover:underline">
                                <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add university</a>
                            </div>
                        </div>

                        <div className="mt-4 mb-3">
                            <h3 className="text-[18px] font-bold">Current town/city</h3>
                            <div className="flex justify-start items-center mt-3 hover:underline">
                                <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add current town/city</a>
                            </div>
                        </div>

                        <div className="mt-4 mb-3">
                            <h3 className="text-[18px] font-bold">Home town</h3>
                            <div className="flex justify-start items-center mt-3 hover:underline">
                                <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add home town</a>
                            </div>
                        </div>

                        <div className="mt-4 mb-3">
                            <h3 className="text-[18px] font-bold">Relationship</h3>
                            <div className="flex justify-start items-center mt-3 hover:underline">
                                <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add relationship</a>
                            </div>
                        </div>

                        <div className="mt-4 mb-3">
                            <h3 className="text-[18px] font-bold">Joined Facebook</h3>
                            <div className="flex justify-start items-center mt-3 hover:underline">
                                <label className="relative inline-block w-[60px] h-[34px]">
                                    <input className="switch" type="checkbox"/>
                                    <span className="slider"></span>
                                </label>

                                <p className="text-[#2b2b2b] text-[15px] font-semibold ml-5">Joined on June 2019</p>
                            </div>
                        </div>

                        <div className="mt-4 mb-3">
                            <h3 className="text-[18px] font-bold">Followers</h3>
                            <div className="flex justify-start items-center mt-3 hover:underline">
                                <label className="relative inline-block w-[60px] h-[34px]">
                                    <input className="switch" type="checkbox"/>
                                    <span className="slider"></span>
                                </label>

                                <p className="text-[#2b2b2b] text-[15px] font-semibold ml-5">Followed by 10k people</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-t-[3px] px-7 border-[#ddd] pt-5">
                        <Link to={"/about-profile"} className="px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center">Update Your Information</Link>
                        
                        <div className="flex justify-end items-center">
                            <a onClick={(e) => {e.preventDefault(); setDetailsModal(false);}} href="/" className="px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center">Cancel</a>
                            <a href="/" className="px-4 py-2 font-semibold text-[#ffffff] rounded-md ml-3 bg-[#D82E38] flex justify-center items-center">Save</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
    </>
  )
}


export default ProfileDetailsModal;
