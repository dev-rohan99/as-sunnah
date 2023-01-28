import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiDotsHorizontal } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import Avatar from '../avatar/Avatar';


const ProfileHeader = () => {

    const { user } = useSelector((state) => state.auth);

  return (
    <>
    
        <div className="bg-gradient-to-b from-[#d82e399c]">

            <div className="w-[1070px] mx-auto h-[400px] rounded-b-xl bg-gradient-to-t from-[#131313a1] relative overflow-hidden">
                <img className="w-[100%] h-[100%] absolute left-0 right-0 top-0" src={ user.coverPhoto ? user.coverPhoto : "https://i.pinimg.com/originals/f7/6d/8b/f76d8b2151662648ef12face46c6396f.jpg"} alt="cover-photo" />

                <a href="/" className="absolute right-5 bottom-5 px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#D82E38]">Add Cover Photo</a>
            </div>

        </div>

        <div className="border-b-[3px] border-[#ddd]">
            <div className="w-[1010px] mx-auto mt-[-40px] flex justify-between items-end pb-[20px] border-b-[3px] border-[#ddd]">

                <div className="w-[500px] z-30 flex items-end justify-start">
                    <img 
                        src={user.avatar ? user.avatar : 'https://cdn-icons-png.flaticon.com/512/219/219988.png' } 
                        alt="user" 
                        className="w-[160px] h-[160px] border-[5px] border-[#fff] rounded-full object-cover"
                    />
                    <div className="mb-[10px] ml-3">
                        <h3 className="text-[30px] font-semibold mb-[-5px]">Rohan Mostofa</h3>
                        <h3 className="text-[16px] cursor-pointer hover:underline font-semibold text-[gray]">174 friends</h3>

                        <div className="flex justify-start">

                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />

                        </div>
                    </div>
                </div>

                <div className="w-[500px] z-30 flex items-center justify-end">
                    <a href="#" className="mb-[10px] px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#D82E38] flex justify-center items-center"><BsFillPlusSquareFill className="w-[15px] h-[15px] mr-2"/> Add Your Story</a>
                    <a href="#" className="mb-[10px] px-4 py-2 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center"><AiFillEdit className="w-[15px] h-[15px] mr-2"/> Edit Profile</a>
                </div>

            </div>

            <div className="w-[1010px] mx-auto flex justify-between items-center">

                <div className="w-[700px]">
                    <ul className="list-none">
                        <li className="inline-block"><a className="profileHeaderMenuItems activeThree" href="/">Posts</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">About</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">Friends</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">Photos</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">Videos</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems flex justify-center items-center" href="/">More <RiArrowDownSFill className="w-[20px] h-[20px] ml-[3px]"/></a></li>
                    </ul>
                </div>

                <div className="w-[200px] flex justify-end">
                    <a href="/" className="px-4 py-2 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex items-center"><BiDotsHorizontal className="w-[20px] h-[20px]"/></a>
                </div>

            </div>
        </div>

    
    </>
  )
}

export default ProfileHeader;
