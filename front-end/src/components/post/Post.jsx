import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Post = ({profile, postImage, postDesc}) => {
  return (
    <div>
      
      <div className="p-3 mt-4 bg-[#ffffff] shadow-md rounded-md">
        <div className="flex justify-between items-center">

          <div className="flex justify-start items-center">
            <img src={profile} className="h-[35px] rounded-full w-[35px] object-cover"/>
            <div className="w-[250px] flex flex-col">
              <a href="/" className="ml-3 font-semibold text-[14px] text-[#2b2b2b]">Rohan Mostafa</a>
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
      </div>

    </div>
  )
}

export default Post;
