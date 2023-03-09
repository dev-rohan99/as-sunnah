import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Avatar from '../avatar/Avatar';
import { AiFillHeart, AiFillSetting, AiOutlineLeft, AiOutlineRight, AiTwotoneLike } from 'react-icons/ai';
import { BsFillEmojiAngryFill, BsFillEmojiLaughingFill, BsGrid3X3GapFill } from 'react-icons/bs';


const PostItem = ({postImage, postDesc, posterName}) => {
  return (
    <>
      
      <div className="w-[555px] p-3 mb-4 bg-[#ffffff] shadow-md rounded-md">
        <div className="flex justify-between items-center">

          <div className="flex justify-start items-center">
            <Avatar/>
            <div className="w-[250px] flex flex-col">
              <a href="/" className="ml-3 font-semibold text-[14px] text-[#2b2b2b]">{posterName}</a>
              <a href="/" className="ml-3 font-normal text-[14px] mt-[-3px] text-[#2b2b2b]">1h ago</a>
            </div>
          </div>

          <div className="w-[80px] flex justify-end">
            <a href="/" className="w-[30px] h-[30px] rounded-full text-[#2b2b2b] flex justify-center items-center hover:bg-[#c9c9c9] mr-2">
              <BsThreeDots className="w-[20px] h-[20px]"/>
            </a>
            <a href="/" className="w-[30px] h-[30px] rounded-full text-[#2b2b2b] flex justify-center items-center hover:bg-[#c9c9c9]">
              <RxCross1 className="w-[20px] h-[20px]"/>
            </a>
          </div>

        </div>

        <p className="mt-3 mb-3 text-[14px] text-[#2b2b2b]">{postDesc}</p>

        <img src={postImage} alt="" />

        <div className="flex">
          <a href="/" className="w-[140px] py-3 flex justify-center items-center"><AiTwotoneLike className="text-2xl"/></a>
        </div>
      </div>

    </>
  )
}

export default PostItem;
