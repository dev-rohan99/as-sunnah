import React from 'react';
import { BiHappyAlt } from 'react-icons/bi';
import { HiPhotograph } from 'react-icons/hi';
import { RiLiveFill } from 'react-icons/ri';
import Avatar from '../avatar/Avatar';
import PostItem from '../post-item/PostItem';


const ProfileTimeline = () => {


  return (
    <>
    
        
        <div className="w-[555px] p-3 mt-5 mb-4 bg-[#ffffff] shadow-md rounded-md">
            <div className="flex justify-between items-center rounded-l-md pb-3">
                <Avatar/>
                <a href="/" className="p-[5px] flex items-center px-[20px] outline-none h-[40px] ml-3 w-[90%] rounded-[20px] font-semibold text-[#9b9b9b] bg-[#e7e7e7] hover:bg-[#d1d1d1]">What's on your mind?</a>
            </div>

            <hr />

            <div className="flex mt-3 justify-between">
                <a href="/" className="w-[180px] hover:bg-[#d82e394d] rounded-md font-semibold text-[#2b2b2b] h-[40px] flex items-center justify-center"><RiLiveFill className="h-[30px] w-[30px] text-[#D82E38] mr-2"/>Live video</a>

                <a href="/" className="w-[180px] hover:bg-[#d82e394d] rounded-md font-semibold text-[#2b2b2b] h-[40px] flex items-center justify-center"><HiPhotograph className="h-[30px] w-[30px] text-[#41B35D] mr-2"/>Photo/video</a>
                
                <a href="/" className="w-[180px] hover:bg-[#d82e394d] rounded-md font-semibold text-[#2b2b2b] h-[40px] flex items-center justify-center"><BiHappyAlt className="h-[30px] w-[30px] text-[#ffb508] mr-2"/>Felling/activity</a>
            </div>
        </div>

        <PostItem postDesc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis ipsam repellendus voluptatibus quibusdam impedit, explicabo expedita? Ipsa ipsum iste consequatur animi itaque perferendis unde adipisci quod, esse, voluptate totam!`} postImage="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg"/>
    
    </>
  )
}

export default ProfileTimeline;